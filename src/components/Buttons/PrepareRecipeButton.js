import React from 'react';
import { Button } from 'react-bootstrap';
import { addRecipeToPrepare } from 'actions/prepare';
import { showModal } from 'actions/modal';
import { PREPARE_RECIPE_MODAL } from 'constants/modalNames';
import { useDispatch } from 'react-redux';

const PrepareRecipeButton = ({ id, children, block, className, variant }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addRecipeToPrepare(id));
    dispatch(showModal(PREPARE_RECIPE_MODAL));
  };

  return (
    <Button
      className={className}
      block={block}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default PrepareRecipeButton;
