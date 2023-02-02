import React from 'react';
import './PageWrapper.css';
import { PageContextProvider } from './usePageContext';
import { PageWrapperProps } from './../types';
import theme from '@mdb/flora/theme';
import { ThemeProvider } from '@theme-ui/core';

export { PageWrapper };

function PageWrapper({ pageContext, children }: PageWrapperProps): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
