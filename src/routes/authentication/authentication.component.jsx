import SignUp from "../../components/sign-up-form/sign-up-form.component";

import SignIn from "../../components/sign-in/sign-in.component";
import './authentication.styles.scss'

const Authentication = () => {

 
  return (
    <div className="auth-container">
      <SignIn/>
      <SignUp />

    </div>
  );
};

export default Authentication;
