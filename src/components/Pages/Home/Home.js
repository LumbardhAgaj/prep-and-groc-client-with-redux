import React from 'react';
import { useLocation } from 'react-router-dom';
import HomePageHeader from './HomePageHeader';
import HomePageBody from './HomePageBody';
import useGetPageItems from 'hooks/useGetPageItems';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { RECIPES_ROUTE } from 'constants/applicationRoutes';

const Home = () => {
  const { search } = useLocation();
  useGetPageItems(RECIPES_ROUTE, search);

  return (
    <>
      <HomePageHeader />
      <ErrorBoundary>
        <HomePageBody />
      </ErrorBoundary>
    </>
  );
};
export default Home;
