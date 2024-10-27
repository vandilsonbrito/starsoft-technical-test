'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import store from '../../utils/redux/store';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
