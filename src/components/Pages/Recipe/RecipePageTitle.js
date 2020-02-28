import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Header from 'components/PageLayout/Header';

const RecipeTitle = styled.h1`
  text-align: center;
  margin: 7.5% 0 2.5% 0;
`;

const RecipePageTitle = () => {
  const recipe = useSelector(state => state.page.items);

  return (
    <Header>
      <Container>
        <Row>
          <Col md={12}>
            <RecipeTitle>{recipe.title}</RecipeTitle>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

export default RecipePageTitle;
