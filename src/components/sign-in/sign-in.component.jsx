import { useState } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      alert('error');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetField();
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
       alert('user not found')
      } else if(error.code === 'auth/wrong-user') {
       alert('wrong user')
      }
      else{
       console.log(error)
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Welcome Back</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="btn-sign">
          <Button type="submit">Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType="google">
            Sing in with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
