import { removePageItem, updatePageItem } from './page';
import { hideModal } from './modal';
import { addSuccessToast } from './notification';
import { handleUserActionError } from './user';
import handleFetch from 'utils/handleFetch';
import {
  GROCERY_ITEMS_ROUTE,
  GROCERY_ITEMS_MARK_COMPLETE_ROUTE,
  GROCERY_ITEMS_SAVE_OR_UPDATE_MANY_ROUTE
} from 'constants/applicationRoutes';
import {
  DELETE_GROCERY_ITEM_MESSAGE,
  SAVE_GROCERY_ITEMS_MESSAGE
} from 'constants/userMessages';

const markGroceryItemComplete = (itemId, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  handleFetch(`${GROCERY_ITEMS_MARK_COMPLETE_ROUTE}/${itemId}`, {
    method: 'PUT'
  })
    .then(() => {
      dispatch(updatePageItem(itemId, 'isCompleted', true));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
    })
    .finally(() => setIsDisabled(false));
};

const deleteGroceryItem = (itemId, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  handleFetch(`${GROCERY_ITEMS_ROUTE}/${itemId}`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(removePageItem(itemId));
      dispatch(addSuccessToast(DELETE_GROCERY_ITEM_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
      setIsDisabled(false);
    });
};

const saveGroceryItems = (items, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  handleFetch(GROCERY_ITEMS_SAVE_OR_UPDATE_MANY_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(items)
  })
    .then(() => dispatch(addSuccessToast(SAVE_GROCERY_ITEMS_MESSAGE)))
    .catch(error => {
      dispatch(handleUserActionError(error));
      setIsDisabled(false);
    })
    .finally(() => dispatch(hideModal('prepare-recipe')));
};

export { deleteGroceryItem, markGroceryItemComplete, saveGroceryItems };
