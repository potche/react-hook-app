import { useState } from 'react';
import { User, UserContextProps } from '../../types/useContext';
import { UserContext } from './UserContext';

type props = {
  children: JSX.Element | JSX.Element[];
};

/*const user = ;*/

export const UserProvider = ({ children }: props) => {
  const [user, setUser] = useState({} as User);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
