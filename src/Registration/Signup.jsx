import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            setError("");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            console.log(errorCode, errorMessage);
            // ..
        });
 
        setError("");
    }
   
  return (
    <main  className='d-flex justify-content-center mt-5'>        
        <section>
           
                <div>                  
                    <h1> SignUp </h1>
                    
                                                                            
                    <form>
                    <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    required
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                    </div>                                                                                            
                        

                         <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    required
                                    placeholder="Enter your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>                                             
              
                        <div className='mb-3'>
                                <button
                                type='button'
                                className='btn btn-default'
                                style={{backgroundColor:"#d63384",color:"#ffffff"}}
                                onClick={onSubmit}
                                >
                                    Sign up  
                                </button>
                            </div>
                                                                     
                    </form>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    {error && <p style={{color:"red"}}>{error}</p>}

                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
           
        </section>
    </main>
  )
}
 
export default Signup