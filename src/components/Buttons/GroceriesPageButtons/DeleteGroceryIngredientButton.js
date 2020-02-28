import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { deleteGroceryItem } from 'actions/groceryItem';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';

const DeleteGroceryItemButton = ({ id, isCompleted }) => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  return (
    <Button
      disabled={!isCompleted || isDisabled}
      data-testid="user-action-button"
      variant="danger"
      onClick={() => dispatch(deleteGroceryItem(id, setIsDisabled))}
      block
    >
      {isCompleted && isDisabled ? (
        <Spinner animation="border" size="sm" />
      ) : (
        'Delete'
      )}
    </Button>
  );
};

export default DeleteGroceryItemButton;
