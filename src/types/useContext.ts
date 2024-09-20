import { Dispatch, SetStateAction } from 'react';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type UserContextProps = {
  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;
};
