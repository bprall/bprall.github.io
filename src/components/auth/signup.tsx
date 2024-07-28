import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, collection } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import { db } from '../../config/firebaseConfig';
import TopBar from "../top-bar";

export function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const fields = [
    {
      id: "floatingFirstName", 
      type: "text", placeholder: "First Name", 
      value: firstName, 
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)
    },
    {
      id: "floatingLastName", 
      type: "text", placeholder: "Last Name", 
      value: lastName, 
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
    },
    {
      id: "floatingEmail", 
      type: "email", placeholder: "Email", 
      value: email, 
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    },
    {
      id: "floatingPassword", 
      type: "password", 
      placeholder: "Password", 
      value: password, 
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    },
    {
      id: "floatingConfirmPassword", 
      type: "password", 
      placeholder: "Confirm Password", 
      value: confirmPassword, 
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)
    },
  ];

  const onSignUpSuccess = async () => {
    try {
      if (!email || !password) {
        console.error('Email and password are required.');
        setError('Email and password are required.');
        return;
      }
  
      if (password.length < 6) {
        console.error('Password must be at least 6 characters long.');
        setError('Password must be at least 6 characters long.');
        return;
      }
  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await sendEmailVerification(user);
  
      const userCollectionRef = collection(db, `users/${user.uid}/info`);
      const infoDocRef = doc(userCollectionRef, 'userInfo');
  
      await setDoc(infoDocRef, {
        uid: user.uid,
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        status: 'pending', 
      });
  
      console.log("Verification email sent.");
      navigate('/signup-pending', { replace: true });
  
    } catch (error) {
      console.error('Registration error:', error);
      setError(`Registration failed: ${error.message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords do not match.');
      setError('Passwords do not match.');
      return;
    }
    onSignUpSuccess();
  };

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="form-floating mb-3" key={field.id}>
          <input
            className="form-control"
            type={field.type}
            placeholder={field.placeholder}
            id={field.id}
            value={field.value}
            onChange={field.onChange}
            required
          />
          <label htmlFor={field.id}>{field.placeholder}</label>
        </div>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {error ? null : <br />}
      <input type="submit" value="Sign Up" />
    </form>
  );
}

function RenderSignUp() {
  return (
    <>
      <TopBar />
      <div className="login-form">
        <SignUp />
      </div>
    </>
  );
}

export default RenderSignUp;
