import { createContext } from 'react';
import { UserContextProps } from '../../types/useContext';

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);
