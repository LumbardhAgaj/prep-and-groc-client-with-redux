import React from 'react';
import LoadingButton from 'components/Buttons/LoadingButton';
import { deleteRecipeFromRecipePage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const DeleteRecipePageButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <LoadingButton
      block
      variant="danger"
      style={{ marginBottom: '1%' }}
      onClick={() => dispatch(deleteRecipeFromRecipePage(id, setIsDisabled))}
      isDisabled={isDisabled}
    >
      <i data-testid="delete-icon" className="fas fa-trash fa-lg" /> Delete
    </LoadingButton>
  );
};

export default DeleteRecipePageButton;
