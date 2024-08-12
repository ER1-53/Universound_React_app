import React, { FunctionComponent, useState } from 'react';
import LogoHeader from '../../../components/header/logoheader';
/* import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login'; */
import styles from './signup.module.css'
import { Link } from 'react-router-dom';
import UserService from '../../../service/user_service';

// Defining the props for the sugnUp component
interface SignupProps {
  handleSignup: (username: string, password: string, email: string, fistname: string, lastname: string) => void;
}

//SignUp component
const SignUp: FunctionComponent<SignupProps> = ({ handleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [message, setMessage] = useState<String>('');
  const [formSubmit, setFormSubmit] = useState<Boolean>(false);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }
    UserService.createUser(firstname, lastname, username, password, email);
    const formIsValid = true
    if(formIsValid) {
      setFormSubmit(true);
      setMessage("Votre compte a été créé avec succès !");
    }
  };

  //add for google connect
  /* const onSignIn = (params: IResolveParams) => {
    if (params.provider && params.data) {
      console.log(params.provider, params.data);
    }
  }; */

  // Rendering the SignUp component
  return (
    <div className={styles.FullPage}>
      <div className={styles.title}>
          <LogoHeader />
      </div>
      <div className={styles.big_box}>
        <main className={styles.signBox}>
          <div className={styles.decorateBox}>
            <h1 className={styles.accroche}>Profiter d'un large choix de titres audio de qualité</h1>
          </div>
          <div>
              {formSubmit ? (
                <>
                <h1>{message}</h1>
                <Link to='/login' className={styles.signLink}>Page de login</Link>
                </>
              ) : (
                <div className={styles.infosLog}>
            <h2>Create my Universe of Sound</h2>
            <Link to="/login"><h6>J'ai déjà un compte ...</h6></Link>
            <hr />
            <form action="/submit" method="post" className={styles.field} onSubmit={handleSubmit}>
              <label htmlFor="firstname">Firstname :</label>
              <input type="text" id="firstname" name="firstname" required placeholder="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />

              <label htmlFor="lastname">Lastname :</label>
              <input type="text" id="lastname" name="lastname" required placeholder="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />

              <label htmlFor="e-mail">Address e-mail :</label>
              <input type="text" id="email" name="email" required placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />

              <label htmlFor="username">Username :</label>
              <input type="text" id="username" name="username" required placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />


              <label htmlFor="password">Password :</label>
              <input type="password" id="passwordSignUp" name="passwordSignUp" required placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />

              <label htmlFor="password">Checking Password :</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="checking password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              <div className={styles.buttonSubmit}>
              <button type="submit">créer un compte</button>
              </div>
            </form>
            {/* <LoginSocialGoogle
                client_id="368574400224-oj4fctha2pfjqg0m5h0p99u7kjaluuad.apps.googleusercontent.com"
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={onSignIn}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <GoogleLoginButton />
              </LoginSocialGoogle> */}
          </div>
              )}
            </div>

        </main>
      </div>
    </div>
  );
};

export default SignUp;
