import React from 'react';
import LoadingButton from 'components/Buttons/LoadingButton';
import styled from 'styled-components';
import { removeCollectedRecipeFromMyRecipesPage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const StyledRemoveCardRecipeButton = styled(LoadingButton)`
  position: absolute;
  top: 10px;
  padding: 0;
  right: 5px;
  color: black;

  :hover {
    color: white;
  }
`;

const RemoveCardRecipeButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <StyledRemoveCardRecipeButton
      variant="link"
      isDisabled={isDisabled}
      onClick={() =>
        dispatch(removeCollectedRecipeFromMyRecipesPage(id, setIsDisabled))
      }
    >
      <i data-testid="remove-icon" className="fas fa-heart" />
    </StyledRemoveCardRecipeButton>
  );
};

export default RemoveCardRecipeButton;
