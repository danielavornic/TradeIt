import { createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import app from "../firebase";
import { Loader } from "../components";
import { useRouter } from "next/router";

interface UserContextProps {
  user: any;
  logged: boolean;
  idToken?: string;
  setLogged: (logged: boolean) => void;
  onLogIn: (email: string, password: string) => void;
  onLogOut: () => void;
  onSignUp: (email: string, password: string) => void;
  onGoogleLogIn: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  logged: false,
  idToken: undefined,
  setLogged: () => {},
  onLogIn: () => {},
  onLogOut: () => {},
  onSignUp: () => {},
  onGoogleLogIn: () => {}
});

const auth = getAuth(app);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const toast = useToast();
  const router = useRouter();

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [idToken, setIdToken] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const errorToast = (message: string) =>
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });

  const onLogIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);

        setLogged(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorToast(errorMessage);
      });
  };

  const onLogOut = () => {
    auth.signOut().then(() => {
      setUser(null);
      setLogged(false);
      router.push("/");
    });
  };

  const onSignUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user);

        setLogged(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorToast(errorMessage);
      });
  };

  const onGoogleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user);
        setLogged(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        errorToast(errorMessage);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          setIdToken(idToken);
        });
        setUser(user);
        setLogged(true);
        setIsLoading(false);  
        router.push("/home");
      } else {
        setUser(null);
        setLogged(false);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        logged,
        user,
        idToken,
        setLogged,
        onLogIn,
        onLogOut,
        onSignUp,
        onGoogleLogIn,
      }}
    >
      {isLoading ? <Loader /> : children}
    </UserContext.Provider>
  );
};
