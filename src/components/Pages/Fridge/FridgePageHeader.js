import React, { useCallback } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Header from 'components/PageLayout/Header';
import SaveIngredientForm from 'components/SaveIngredientForm/SaveIngredientForm';
import { saveFridgeIngredient } from 'actions/fridgeIngredient';
import { useDispatch } from 'react-redux';

const FridgePageHeader = () => {
  const dispatch = useDispatch();

  const onSaveIngredient = useCallback(
    (values, { setErrors, resetForm, setSubmitting }) => {
      dispatch(
        saveFridgeIngredient(values, setErrors, resetForm, setSubmitting)
      );
    },
    [dispatch]
  );

  return (
    <Header>
      <Container fluid>
        <Container>
          <Row>
            <Col
              md={{ span: 10, offset: 1 }}
              style={{ marginTop: '50px', marginBottom: '25px' }}
            >
              <SaveIngredientForm onSaveIngredient={onSaveIngredient} />
            </Col>
          </Row>
        </Container>
      </Container>
    </Header>
  );
};

export default FridgePageHeader;
