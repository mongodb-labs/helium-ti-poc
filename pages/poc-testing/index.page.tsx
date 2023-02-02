import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import { gql, useQuery } from '@apollo/client';
import Accordion from '../../components/Accordion/Accordion';
import { UnifiedNav, UnifiedFooter } from '@mdb/consistent-nav';
import { Button } from '@mdb/flora';
import theme from '@mdb/flora/theme';
import { ThemeProvider } from '@theme-ui/core';

export { Page };
export { documentProps };

const documentProps = {
  title: 'A page that was created for testing',
  description: 'The page that was created for testing'
};

function Page() {
  const [currentUser, setCurrentUser] = useState<any>('');

  const { data: user } = useQuery(
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
    setCurrentUser(user?.CurrentUser?.id);
  }, [user]);

  // TODO: Add query for UserCertificateFields 

  const { data: catalog } = useQuery(
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

  const courses = catalog?.CatalogContent?.contentItems;
  // const currentUserID = user?.CurrentUser?.id;

  const { data: userCourses } = useQuery(
    gql`
      query {
        UserCourseCompletionProgress(id: "${currentUser}") {
          type,
          required,
          completed,
          percent
        }
      }
    `
  );

  const { data: userCourseProgress } = useQuery(
    gql`
      query {
        UserCourseProgress(id: "${currentUser}") {
          totalViews,
          totalTime,
          percentComplete
        }
      }
    `
  );

  const { data: userBadgeBoard } = useQuery(
    gql`
      query {
        UserEarnedBadgeBoard {
          earnedBadges {
            id
            deleted
            user {
              firstName
              lastName
            }
            badge {
              id
              label
            }
          }
          unearnedBadges {
            id
            awardType {
              label
            }
            awardThreshold
            asset
            label
          }
        }
      }
    `
  );

  console.log('user', user);
  console.log('currentUser local state', currentUser);
  console.log('userCourseProgress', userCourseProgress);
  console.log('userCourses', userCourses);

  return (
    <>
        <UnifiedNav position="sticky" />
          <Button>
            Flora Test Button!
          </Button>
      <UnifiedFooter hideLocale />
    </>
  );
}
