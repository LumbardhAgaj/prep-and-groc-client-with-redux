import React from 'react';
import styled from 'styled-components';
import LoadingButton from 'components/Buttons/LoadingButton';
import { deleteRecipeFromMyRecipesPage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const StyledDeleteCardRecipeButton = styled(LoadingButton)`
  position: absolute;
  top: 10px;
  padding: 0;

  color: #dc3545;
  right: 5px;
  :hover {
    color: #dc3545;
  }
`;

const DeleteCardRecipeButton = ({ id }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <StyledDeleteCardRecipeButton
      isDisabled={isDisabled}
      onClick={() => dispatch(deleteRecipeFromMyRecipesPage(id, setIsDisabled))}
      variant="link"
    >
      <i data-testid="delete-icon" className="fas fa-trash" />
    </StyledDeleteCardRecipeButton>
  );
};

export default DeleteCardRecipeButton;
