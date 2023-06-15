import { auth } from '../firebase';

const Logout = () => {
  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('user');
  };

  return <button onClick={handleLogout} className='btn btn-default' style={{border:"1px solid #d63384"}}>Logout</button>;
};

export default Logout;
