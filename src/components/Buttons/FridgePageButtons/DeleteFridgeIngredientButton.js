import React from 'react';
import LoadingButton from 'components/Buttons/LoadingButton';
import { deleteFridgeIngredient } from 'actions/fridgeIngredient';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const DeleteFridgeIngredientButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <LoadingButton
      isDisabled={isDisabled}
      onClick={() => dispatch(deleteFridgeIngredient(id, setIsDisabled))}
      data-testid="user-action-button"
      variant="danger"
      block
    >
      Delete
    </LoadingButton>
  );
};

export default DeleteFridgeIngredientButton;
