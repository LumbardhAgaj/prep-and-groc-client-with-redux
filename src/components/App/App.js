import React from 'react';
import Content from 'components/PageLayout/Content';
import NotificationToast from 'components/NotificationToast/NotificationToast';
import LoginModal from 'components/LoginModal/LoginModal';
import PrepareRecipeModal from 'components/PrepareRecipeModal/PrepareRecipeModal';
import { LOGIN_MODAL, PREPARE_RECIPE_MODAL } from 'constants/modalNames';
import { isModalShown } from 'selectors';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoginModalShown = useSelector(isModalShown(LOGIN_MODAL));
  const isPrepareRecipeModalShown = useSelector(
    isModalShown(PREPARE_RECIPE_MODAL)
  );

  return (
    <>
      <Content />
      <NotificationToast />
      {isLoginModalShown ? <LoginModal /> : null}
      {isPrepareRecipeModalShown ? <PrepareRecipeModal /> : null}
    </>
  );
};

export default App;
