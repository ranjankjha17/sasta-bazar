import React, { useEffect} from 'react';
import { auth } from '../firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);    

    return (
        <>        

            <div>
                {user ?
                    (
                        <div>
                            <p>Welcome, {user.email}!</p>
                            <Logout />
                        </div>
                    )
                    :
                    (<Login />
                    )}
            </div>
        </>
    )
}

export default Dashboard;