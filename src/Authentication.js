import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { setAuthState } from "./slice/authslice";
import { use } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBqMhRNQ9PEdM0Zv6lQOaPbXaGvwn_ozbk",
  authDomain: "studymotion-38db9.firebaseapp.com",
  projectId: "studymotion-38db9",
  storageBucket: "studymotion-38db9.appspot.com",
  messagingSenderId: "969370151510",
  appId: "1:969370151510:web:2ef8dc52e45753502d69f7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

const registerUser = async (formData, dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    const user = userCredential.user;

    if (!user) throw new Error("User creation failed");

    await setDoc(doc(db, "users", user.uid), {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email,
      phone: formData.phone || "",
      role: formData.role,
    });
    // console.log(role)
    const token = await user.getIdToken(); 
    
    if (dispatch) { 
      dispatch(setAuthState(token));
    }

    localStorage.setItem("token", token);
    toast.success("Signup successful! Redirecting...");
    return { token, user };
  } catch (error) {
    console.error("Signup Error:", error);
    toast.error(error.message);
    throw error;
  }
};


const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user)
    if (!user) throw new Error("User login failed");

    const token = await user.getIdToken();

    localStorage.setItem("token", token , user);

    return user;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user) throw new Error("Google Sign-in failed");

    const token = await user.getIdToken(); 

    localStorage.setItem("token", token);

    return user;
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};


export { loginUser, registerUser, signInWithGoogle };
export default auth
