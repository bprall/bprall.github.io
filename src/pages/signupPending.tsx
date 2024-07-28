import React, { useEffect, useState } from 'react';
import { getAuth, sendEmailVerification, onAuthStateChanged, User } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/top-bar';

const COOLDOWN_TIME = 60 * 4000;

const SignUpPending: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); 
  const [cooldownEndTime, setCooldownEndTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.emailVerified) {
          navigate('/'); 
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  useEffect(() => {
    const savedCooldownEndTime = localStorage.getItem('cooldownEndTime');
    if (savedCooldownEndTime) {
      const endTime = parseInt(savedCooldownEndTime, 10);
      if (endTime > Date.now()) {
        setCooldownEndTime(endTime);
      }
    }
  }, []);

  useEffect(() => {
    if (cooldownEndTime) {
      const interval = setInterval(() => {
        const now = Date.now();
        const timeLeft = cooldownEndTime - now;
        if (timeLeft <= 0) {
          clearInterval(interval);
          setCooldownEndTime(null);
          localStorage.removeItem('cooldownEndTime');
        } else {
          setRemainingTime(timeLeft);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [cooldownEndTime]);

  const resendVerificationEmail = async () => {
    if (user) {
      try {
        await sendEmailVerification(user);
        alert('Verification email sent.');
        const endTime = Date.now() + COOLDOWN_TIME;
        setCooldownEndTime(endTime);
        localStorage.setItem('cooldownEndTime', endTime.toString());
      } catch (error) {
        if (error.code === 'auth/too-many-requests') {
          alert('Too many requests. Please try again later.');
        } else {
          console.error('Error sending verification email:', error);
          alert('Error sending verification email.');
        }
      }
    }
  };

  const formatTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopBar />
      <div className="signup-pending">
        <h1>Account Pending Approval</h1>
        <br />
        <p>
          Your account is currently pending approval. First, you need to verify your email. 
          You will be notified once it's approved.
        </p>
        <p>
          If you did not receive the verification email, check your spam folder or{' '}
          <button 
            id="resend-verify-button" 
            onClick={resendVerificationEmail} 
            className="resend-button"
            disabled={cooldownEndTime !== null}
          >
            resend the verification email
          </button>.
        </p>
        <br></br>
        {cooldownEndTime && (
          <p>
            Please wait {formatTime(remainingTime)} before requesting again.
          </p>
        )}
      </div>
    </>
  );
};

export default SignUpPending;
