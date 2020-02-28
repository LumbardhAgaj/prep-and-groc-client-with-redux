import React from 'react';
import styled from 'styled-components';
import LoadingButton from 'components/Buttons/LoadingButton';
import { addRecipeToCollectionFromHomePage } from 'actions/recipe';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const StyledAddCardRecipeButton = styled(LoadingButton)`
  position: absolute;
  top: 10px;
  padding: 0;
  color: white
  right: 5px;
  :hover {
    color:black
  }
`;

const AddCardRecipeButton = ({ id, addCardRecipeSuccessToast }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <StyledAddCardRecipeButton
      onClick={() =>
        dispatch(
          addRecipeToCollectionFromHomePage(
            id,
            addCardRecipeSuccessToast,
            setIsDisabled
          )
        )
      }
      variant="link"
      isDisabled={isDisabled}
    >
      <i data-testid="add-icon" className="fas fa-heart" />
    </StyledAddCardRecipeButton>
  );
};

export default AddCardRecipeButton;
