import React from 'react';
import { removeToast } from 'actions/notification';
import NotificationToastTemplate from './NotificationToastTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationToasts } from 'selectors';

const NotificationToast = () => {
  const dispatch = useDispatch();
  const toasts = useSelector(getNotificationToasts);

  const handleClose = id => {
    dispatch(removeToast(id));
  };

  return (
    <>
      {toasts.map((toast, index) => {
        return (
          <NotificationToastTemplate
            key={toast.id}
            index={index}
            onClose={handleClose}
            toast={toast}
          />
        );
      })}
    </>
  );
};

export default NotificationToast;
