import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  function changePasswordStatus() {
    setShowPassword(!showPassword);
    
  }

  console.log(showPassword);

  return (
    <>
      <div>
        <input type = "email" placeholder = "email" className="email-input-form" />
      </div>
      <div>
        <input type={showPassword ? 'text' : 'password'} placeholder = "password" className="password-input-form"/>
        <button onClick={changePasswordStatus}>{showPassword ? 'Hide' : 'Show'}</button>
      </div>
      <button className="form-login-button">Login</button>
      <button className="form-sign-up-button">Sign up</button>
    </>
  );
}


export default LoginForm;