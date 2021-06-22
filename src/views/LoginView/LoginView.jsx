import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';

export default function LoginView() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const onInputChange = event => {
  //   const input = event.target;
  //   switch (input.dataset.role) {
  //     case 'email':
  //       setEmail(input.value);
  //       break;
  //     case 'password':
  //       setPassword(input.value);
  //       break;
  //     default:
  //       return;
  //   }
  // };

  const onInputChange = event => {
    const fieldType = event.target.name;
    const fieldContent = event.target.value;
    setUser(prev => ({ ...prev, [fieldType]: fieldContent }));
    console.log(user);
  };

  const onLoginSubmit = event => {
    event.preventDefault();
    dispatch(authOps.login(user));
    event.target.reset();
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <form className="inputForm" onSubmit={onLoginSubmit}>
        <label className="inputLabel">
          E-mail
          <input
            name="email"
            className="inputField"
            type="text"
            required
            onChange={onInputChange}
            data-role="email"
          />
        </label>
        <label className="inputLabel">
          Password
          <input
            name="password"
            className="inputField"
            type="text"
            required
            onChange={onInputChange}
            data-role="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
