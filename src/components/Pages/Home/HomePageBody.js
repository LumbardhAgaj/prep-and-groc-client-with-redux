import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';
import CardRecipeWithAddOrRemoveButton from 'components/CardRecipe/CardRecipeWithAddOrRemoveButton';
import EmptyItemsPageLine from 'components/PageLine/EmptyItemsPageLine';
import ErrorMessagePageLine from 'components/PageLine/ErrorMessagePageLine';
import LoadingSpinnerPageLine from 'components/PageLine/LoadingSpinnerPageLine';
import Body from 'components/PageLayout/Body';
import Paginator from 'components/Paginator/Paginator';
import { useSelector } from 'react-redux';
import { getPageState } from 'selectors';

const ResponsiveCardColumns = styled(CardColumns)`
  @media (min-width: 1024px) {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
  }
`;

const HomePageBody = () => {
  const { hasError, isLoading, items, hasItems } = useSelector(getPageState);

  let homePageBody;
  if (hasError) {
    homePageBody = <ErrorMessagePageLine />;
  } else if (isLoading) {
    homePageBody = <LoadingSpinnerPageLine />;
  } else if (hasItems) {
    homePageBody = (
      <ResponsiveCardColumns>
        {items.map(item => (
          <CardRecipeWithAddOrRemoveButton key={item._id} cardRecipe={item} />
        ))}
      </ResponsiveCardColumns>
    );
  } else {
    homePageBody = <EmptyItemsPageLine />;
  }

  return (
    <Body>
      <Container>{homePageBody}</Container>
      <Paginator />
    </Body>
  );
};

export default HomePageBody;
