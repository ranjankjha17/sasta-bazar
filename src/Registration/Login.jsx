import React, {useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button";
import { Alert } from 'bootstrap';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    
    const onLogin = async (e) => {
        e.preventDefault();
      
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;               
                navigate("/cart")
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorCode, errorMessage)
            });
            setError("");
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/cart");
        } catch (error) {
            console.log(error.message);
            setError(error.message);

        }
    };
    return (
        <>
            <main >
                <section>
                    <div>
                        <h1>Login </h1>
                       
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        {error && <Alert variant="danger">{error}</Alert>}

                        <div>
                            <GoogleButton
                                className="g-btn"
                                type="dark"
                                onClick={handleGoogleSignIn}
                            />
                        </div>
                        <p className="text-sm text-primary text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login