import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const About = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>About</div>
      <small>{JSON.stringify(user)}</small>
    </>
  );
};
