import { addPageItem, removePageItem } from './page';
import { addSuccessToast } from './notification';
import handleFetch from 'utils/handleFetch';
import { FRIDGE_INGREDIENTS_ROUTE } from 'constants/applicationRoutes';
import {
  SAVE_FRIDGE_INGREDIENT_MESSAGE,
  DELETE_FRIDGE_INGREDIENT_MESSAGE
} from 'constants/userMessages';
import { VALIDATION_ERROR } from 'constants/errorNames';
import { handleUserActionError } from './user';

const saveFridgeIngredient = (
  ingredient,
  setValidationError,
  resetForm,
  setSubmitting
) => dispatch => {
  setSubmitting(true);
  handleFetch(FRIDGE_INGREDIENTS_ROUTE, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(ingredient)
  })
    .then(savedIngredient => {
      resetForm();
      dispatch(addPageItem(savedIngredient));
      dispatch(addSuccessToast(SAVE_FRIDGE_INGREDIENT_MESSAGE));
    })
    .catch(error => {
      if (error.name === VALIDATION_ERROR) {
        setValidationError(error.errors);
      } else {
        dispatch(handleUserActionError(error));
      }
    })
    .finally(setSubmitting(false));
};

const deleteFridgeIngredient = (ingredientId, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  handleFetch(`${FRIDGE_INGREDIENTS_ROUTE}/${ingredientId}`, {
    method: 'DELETE'
  })
    .then(() => {
      dispatch(removePageItem(ingredientId));
      dispatch(addSuccessToast(DELETE_FRIDGE_INGREDIENT_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
      setIsDisabled(false);
    });
};

export { saveFridgeIngredient, deleteFridgeIngredient };
