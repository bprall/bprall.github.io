import { useEffect } from 'react';
import TopBar from '../components/top-bar';
import '../styles/login.css';

export default function RenderSignupPending() {

  useEffect(() => {
    document.title = 'Sign Up Pending | Blake Prall';
  }, []);

  return (
    <>
        <TopBar/>
        <div className="signup-pending">
            <h1>Sign Up Pending</h1>
            <p>Your account is currently pending approval. You will be notified once it's approved.</p>
        </div>
    </>
  );
}