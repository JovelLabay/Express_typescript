import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { EmailPassword } from "../modules/interface";

import information from "../modules/information.json";

// FUNCTION FOR SIGIN WITH FIREBASE
function siginWithEmailPassword({ email, password }: EmailPassword) {
  const signNow = {
    email,
    password,
    signItNow() {
      return signInWithEmailAndPassword(auth, email, password);
    },
    loginItNow() {
      return createUserWithEmailAndPassword(auth, email, password);
    },
  };

  return signNow;
}

// VALIDATION BEFORE CREATING NEW EMAIL
const validationOfPassword = (
  email: string,
  password: string,
  confirmPassword: string
) => {
  if (!email || !email.includes("@")) {
    return information.email_required;
  }

  if (confirmPassword.split("").length < 6) {
    return information.password_short;
  }

  if (password !== confirmPassword) {
    return information.password_mismatch;
  }

  return information.password_valid;
};

export { siginWithEmailPassword, validationOfPassword };
