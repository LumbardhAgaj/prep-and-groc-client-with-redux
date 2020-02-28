import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  return { dispatch, isDisabled, setIsDisabled };
};
