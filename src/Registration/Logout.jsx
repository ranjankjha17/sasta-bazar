import { auth } from '../firebase';

const Logout = () => {
  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
