import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from 'components/LoginForm/LoginForm';
import SignupForm from 'components/SignupForm/SignupForm';
import { hideModal } from 'actions/modal';
import { LOGIN_MODAL } from 'constants/modalNames';
import { useDispatch, useSelector } from 'react-redux';
import { isModalShown } from 'selectors';

const LoginModal = () => {
  const isLoginModalShown = useSelector(isModalShown(LOGIN_MODAL));
  const [isLoginFormDisplayed, setIsLoginFormDisplayed] = useState(true);
  const dispatch = useDispatch();

  const onHide = () => {
    dispatch(hideModal(LOGIN_MODAL));
  };

  return (
    <Modal
      show={isLoginModalShown}
      onHide={onHide}
      centered
      data-testid="login-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{isLoginFormDisplayed ? 'Login' : 'Signup'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoginFormDisplayed ? <LoginForm /> : <SignupForm />}
        {isLoginFormDisplayed ? (
          <p>
            Don&rsquo;t have an account yet?
            <Button
              variant="link"
              onClick={() => {
                setIsLoginFormDisplayed(false);
              }}
            >
              Signup
            </Button>
          </p>
        ) : (
          <p>
            Already have an account?
            <Button
              variant="link"
              onClick={() => {
                setIsLoginFormDisplayed(true);
              }}
            >
              Login
            </Button>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
