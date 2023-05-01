import React from 'react';
import theme from '@mdb/flora/theme';
import './tailwind.css';
import { ThemeProvider } from '@theme-ui/core';
import { PageContextProvider } from './usePageContext';
import { PageWrapperProps } from './../types';
import './PageWrapper.css';

function PageWrapper({ pageContext, children }: PageWrapperProps): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <PageContextProvider pageContext={pageContext}>{children}</PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export { PageWrapper };