import React from "react";
import GoogleSignin from "../../img/btn_google_signin_dark_pressed_web.png";
import logo from "../../img/CHATTA-1.png";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../css/Welcome.css";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to Chatta!</h2>
      <img src={logo} alt="Chatta logo" width={100} height={100} />
      <p>Sign in with Google to start chatting.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;