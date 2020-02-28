import React from 'react';
import LoadingButton from 'components/Buttons/LoadingButton';
import { addRecipeToCollectionFromRecipePage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const AddRecipePageButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <LoadingButton
      isDisabled={isDisabled}
      block
      style={{ marginBottom: '1%' }}
      onClick={() =>
        dispatch(addRecipeToCollectionFromRecipePage(id, setIsDisabled))
      }
      variant="primary"
    >
      <i data-testid="add-icon" className="fas fa-heart" />
      Add
    </LoadingButton>
  );
};

export default AddRecipePageButton;
