import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm';
import UserContext from '../context/user-context';

export default function Login() {
  const user = useContext(UserContext);

  if (user.id) {
    return <Redirect to="/" />;
  }

  return (
    <main className="main">
      <div className="main__form">
        <LoginForm />
      </div>
    </main>
  );
}
