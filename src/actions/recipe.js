import { removePageItem, updatePageItem } from './page';
import { addSuccessToast } from './notification';
import {
  handleUserActionError,
  handleUserActionErrorInUnprotectedRoute
} from './user';
import handleFetch from 'utils/handleFetch';
import { USER_RECIPES_ROUTE, RECIPES_ROUTE } from 'constants/applicationRoutes';
import {
  SAVE_RECIPE_MESSAGE,
  DELETE_RECIPE_MESSAGE,
  ADD_RECIPE_MESSAGE,
  REMOVE_RECIPE_MESSAGE
} from 'constants/userMessages';
import browserHistory from 'utils/browserHistory';

const deleteRecipe = recipeId =>
  handleFetch(`${RECIPES_ROUTE}/${recipeId}`, { method: 'DELETE' });

const addRecipeToUserCollection = recipeId =>
  handleFetch(`${USER_RECIPES_ROUTE}/${recipeId}`, { method: 'PUT' });

const removeRecipeFromUserCollection = recipeId =>
  handleFetch(`${USER_RECIPES_ROUTE}/${recipeId}`, { method: 'DELETE' });

const saveRecipe = (recipe, setSubmitting) => dispatch => {
  setSubmitting(true);
  handleFetch(RECIPES_ROUTE, {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(() => {
      browserHistory.push('/myrecipes');
      dispatch(addSuccessToast(SAVE_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
      setSubmitting(false);
    });
};

const addRecipeToCollectionFromHomePage = (
  recipeId,
  addCardRecipeSuccessToast,
  setIsDisabled
) => dispatch => {
  setIsDisabled(true);
  addRecipeToUserCollection(recipeId)
    .then(() => {
      dispatch(updatePageItem(recipeId, 'isSaved', true));
      addCardRecipeSuccessToast();
    })
    .catch(error => {
      dispatch(handleUserActionErrorInUnprotectedRoute(error));
      setIsDisabled(false);
    });
};

const removeCollectedRecipeFromHomePage = (
  recipeId,
  setIsDisabled
) => dispatch => {
  setIsDisabled(true);
  removeRecipeFromUserCollection(recipeId)
    .then(() => dispatch(updatePageItem(recipeId, 'isSaved', false)))
    .catch(error => {
      dispatch(handleUserActionErrorInUnprotectedRoute(error));
      setIsDisabled(false);
    });
};

const removeCollectedRecipeFromMyRecipesPage = (
  recipeId,
  setIsDisabled
) => dispatch => {
  setIsDisabled(true);
  removeRecipeFromUserCollection(recipeId)
    .then(() => {
      dispatch(removePageItem(recipeId));
      dispatch(addSuccessToast(REMOVE_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
      setIsDisabled(false);
    });
};

const deleteRecipeFromMyRecipesPage = (recipeId, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  deleteRecipe(recipeId)
    .then(() => {
      dispatch(removePageItem(recipeId));
      dispatch(addSuccessToast(DELETE_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionError(error));
      setIsDisabled(false);
    });
};

const addRecipeToCollectionFromRecipePage = (
  recipeId,
  setIsDisabled
) => dispatch => {
  setIsDisabled(true);
  addRecipeToUserCollection(recipeId)
    .then(() => {
      dispatch(updatePageItem(recipeId, 'isSaved', true));
      dispatch(addSuccessToast(ADD_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionErrorInUnprotectedRoute(error));
      setIsDisabled(false);
    });
};

const removeCollectedRecipeFromRecipePage = (
  recipeId,
  setIsDisabled
) => dispatch => {
  setIsDisabled(true);
  removeRecipeFromUserCollection(recipeId)
    .then(() => {
      dispatch(updatePageItem(recipeId, 'isSaved', false));
      dispatch(addSuccessToast(REMOVE_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionErrorInUnprotectedRoute(error));
      setIsDisabled(false);
    });
};

const deleteRecipeFromRecipePage = (recipeId, setIsDisabled) => dispatch => {
  setIsDisabled(true);
  deleteRecipe(recipeId)
    .then(() => {
      browserHistory.push('/myrecipes');
      dispatch(addSuccessToast(DELETE_RECIPE_MESSAGE));
    })
    .catch(error => {
      dispatch(handleUserActionErrorInUnprotectedRoute(error));
      setIsDisabled(false);
    });
};

export {
  saveRecipe,
  addRecipeToCollectionFromHomePage,
  removeCollectedRecipeFromHomePage,
  deleteRecipeFromMyRecipesPage,
  removeCollectedRecipeFromMyRecipesPage,
  addRecipeToCollectionFromRecipePage,
  removeCollectedRecipeFromRecipePage,
  deleteRecipeFromRecipePage
};
