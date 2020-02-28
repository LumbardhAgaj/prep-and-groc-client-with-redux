const isUserAuthenticated = state => state.user.isAuthenticated;
const getPageState = ({ page }) => ({
  isLoading: page.isLoading,
  hasError: page.hasError,
  items: page.items,
  hasItems: page.items && page.items.length > 0
});
const getModalState = ({ modal }) => ({
  isLoading: modal.isLoading,
  hasError: modal.hasError,
  items: modal.items,
  hasItems: modal.items && modal.items.length > 0
});
const getNotificationToasts = state => state.notification.toasts;
const hasModalError = ({ modal }) => modal.hasError;
const getModalItems = ({ modal }) => modal.items;
const hasModalItems = ({ modal }) => modal.items && modal.items.length > 0;
const getPaginator = state => state.page.paginator;
const getSelectedRecipeIdToPrepare = state => state.prepare;
const isModalShown = modalName => ({ modal }) =>
  modal.isShown && modal.name === modalName;

export {
  isUserAuthenticated,
  getPageState,
  getModalState,
  getNotificationToasts,
  hasModalError,
  getModalItems,
  hasModalItems,
  getPaginator,
  getSelectedRecipeIdToPrepare,
  isModalShown
};
