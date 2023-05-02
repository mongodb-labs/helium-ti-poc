/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

// TODO on the above ... somewhere better to do this? Might be a pain to add in every file

import React, { useEffect, useState } from 'react';
import { UnifiedNav, UnifiedFooter } from '@mdb/consistent-nav';
import { TypographyScale } from '@mdb/flora';
import NavBar from '../../../components/Navigation/NavBar';
import CatalogAndAggregation from '../../../components/CatalogAndAggreg/CatalogAndAggregation';
import { gql, useQuery } from '@apollo/client';
import theme from '@mdb/flora/theme';


export { Page };
export { documentProps };

const documentProps = {
  title: 'A page that was created for testing',
  description: 'The page that was created for testing'
};

function Page() {
  const [currentUser, setCurrentUser] = useState<any>('');

  const { data } = useQuery(
    gql`
      query {
        CurrentUser {
          id
          email
          firstName
          lastName
          lastActiveAt
          certificatesCount
          availableCoursesCount
          startedCoursesCount
          completedCoursesCount
        }
      }
    `
  );

  useEffect(() => {
    setCurrentUser(data);
  }, [data]);

  console.log('user', data);

  return (
    <>
      <NavBar />
      
      {/* TODO: Why don't fonts work without header present? */}
      <div sx={{display: 'none' }}>
        <UnifiedNav />
      </div>
      <section style={{ padding: '90px' }}>
        <a target="_blank" href="https://learn-sandbox.mongodb.com/access/saml/login">Log in</a>
        <TypographyScale variant='heading4'>This is a page built by Helium!!</TypographyScale>
        <TypographyScale variant='heading4' sx={{marginTop: '48px' }}>Full Course Catalog:</TypographyScale>
        <CatalogAndAggregation
          onAddedToQueue={function (): Promise<boolean | void> {
            throw new Error('Function not implemented.');
          }}
        />
      </section>
      <UnifiedFooter hideLocale />
    </>
  );
}
