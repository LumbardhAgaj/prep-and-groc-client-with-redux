import React from 'react';
import LoadingButton from 'components/Buttons/LoadingButton';
import { removeCollectedRecipeFromRecipePage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const RemoveRecipePageButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <LoadingButton
      isDisabled={isDisabled}
      block
      style={{ marginBottom: '1%' }}
      onClick={() =>
        dispatch(removeCollectedRecipeFromRecipePage(id, setIsDisabled))
      }
      variant="danger"
    >
      <i className="far fa-times-circle" />
      Remove
    </LoadingButton>
  );
};

export default RemoveRecipePageButton;
