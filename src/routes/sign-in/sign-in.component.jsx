import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

 const logGoogleUser =  async() => {
  const {user} = await signInWithGooglePopup();
 const userDocRef = await createUserDocumentFromAuth(user);
 } 
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google Popup</button>

      <SignUp />
    </div>
  );
};

export default SignIn;
