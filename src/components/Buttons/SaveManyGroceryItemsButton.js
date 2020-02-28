import React from 'react';
import { Button } from 'react-bootstrap';
import useDispatchActionFromButton from 'hooks/useDispatchActionFromButton';
import { saveGroceryItems } from 'actions/groceryItem';
import { useSelector } from 'react-redux';
import { getModalState } from 'selectors';

const SaveManyGroceryItemsModalButton = () => {
  const { dispatch, isDisabled, setIsDisabled } = useDispatchActionFromButton();

  const { hasError, hasItems, items } = useSelector(getModalState);

  const onClick = () => dispatch(saveGroceryItems(items, setIsDisabled));

  return (
    <Button
      variant="primary"
      block
      disabled={!hasItems || hasError || isDisabled}
      onClick={onClick}
    >
      Save to groceries
    </Button>
  );
};

export default SaveManyGroceryItemsModalButton;
