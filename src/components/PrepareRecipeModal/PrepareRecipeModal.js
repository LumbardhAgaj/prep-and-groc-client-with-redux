import React, { useEffect, useCallback } from 'react';
import { Modal } from 'react-bootstrap';
import PrepareRecipeModalHeader from './PrepareRecipeModalHeader';
import PrepareRecipeModalBody from './PrepareRecipeModalBody';
import PrepareRecipeModalFooter from './PrepareRecipeModalFooter';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { hideModal } from 'actions/modal';
import { prepareRecipe, removePreparedRecipe } from 'actions/prepare';
import { PREPARE_RECIPE_MODAL } from 'constants/modalNames';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedRecipeIdToPrepare, isModalShown } from 'selectors';

const PrepareRecipeModal = () => {
  const dispatch = useDispatch();
  const recipeId = useSelector(getSelectedRecipeIdToPrepare);
  const isPrepareRecipeModalShown = useSelector(
    isModalShown(PREPARE_RECIPE_MODAL)
  );

  const onHide = useCallback(() => {
    dispatch(hideModal(PREPARE_RECIPE_MODAL));
  }, [dispatch]);

  useEffect(() => {
    dispatch(prepareRecipe(recipeId));
    return () => {
      dispatch(removePreparedRecipe());
    };
  }, [recipeId, dispatch]);

  return (
    <Modal
      show={isPrepareRecipeModalShown}
      onHide={onHide}
      centered
      data-testid="prepare-recipe-modal"
    >
      <PrepareRecipeModalHeader />
      <ErrorBoundary>
        <PrepareRecipeModalBody />
      </ErrorBoundary>
      <PrepareRecipeModalFooter onClose={onHide} />
    </Modal>
  );
};

export default PrepareRecipeModal;
