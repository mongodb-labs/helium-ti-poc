import React, { createContext, useContext } from 'react';
import Banner from '../../components/Banner';
import { gql, useQuery } from '@apollo/client';

export { Page };
export { documentProps };

const documentProps = {
  title: 'A page that was created for testing',
  description: 'The page that was created for testing'
};

function Page() {
  const { data } = useQuery(
    gql`
      query {
        CatalogContent(page: 1) {
          contentItems {
            title
            url
            description
          }
        }
      }
    `
  );

  const courses = data?.CatalogContent.contentItems;

  return (
    <>
      <div className="font-primary">
        <Banner
          heading="Available Courses"
          subtext="Here is a list of all of your available courses"
        />
        <div
          style={{
            margin: '0 32px'
          }}
        >
          <h2
            style={{
              fontSize: '40px',
              marginBottom: '24px'
            }}
          >
            Courses
          </h2>
          {courses?.length > 0 && courses.map(({ description, title, url }: any) => {
            return (
              <div
                style={{
                  padding: '12px',
                  border: '1px solid black',
                  margin: '24px 0',
                }}
              >
                <h4 style={{ fontSize: '24px', marginBottom: '12px' }}>{title}</h4>
                {description && <p>{description}</p>}
                {url && (
                  <a
                    href={url}
                    style={{
                      fontSize: '12px',
                      color: 'blue',
                    }}
                  >
                    Go To Course
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
