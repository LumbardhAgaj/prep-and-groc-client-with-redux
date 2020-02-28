import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPageItems } from 'actions/page';
import { isUserAuthenticated } from 'selectors';

const useGetPageItems = (baseUrl, urlParameters) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    dispatch(fetchPageItems(baseUrl, urlParameters));
  }, [isAuthenticated, baseUrl, urlParameters, dispatch]);
};

export default useGetPageItems;
