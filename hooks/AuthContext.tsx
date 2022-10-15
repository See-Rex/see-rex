import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup, 
  signOut,
  User,
  UserCredential
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

type SeeRexUser = {
  displayName: string,
  email: string,
  emailVerified: boolean,
  uid: string,
}

type UserContextType = {
  loading: boolean,
  user: SeeRexUser | null,
  login: (email: string, password: string) => Promise<UserCredential | undefined>, 
  loginWithGoogle: () => Promise<UserCredential | undefined>, 
  logout: () => void,
  register: (email: string, password: string) => Promise<UserCredential | undefined>, 
  reset: (email: string) => void, 
  verify: (user: User) => void,
}

const AuthContext = createContext<UserContextType | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<SeeRexUser | null>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName ?? '',
          email: user.email ?? '',
          emailVerified: user.emailVerified,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (email: string, password: string): Promise<UserCredential | undefined> => {
    const createUserWithEmailResponse = await createUserWithEmailAndPassword(auth, email, password);

    if (createUserWithEmailResponse.user) {
      return createUserWithEmailResponse;
    }
  }

  const verify = (user: User) =>  sendEmailVerification(user);

  const login = async (email: string, password: string): Promise<UserCredential | undefined> => {
    const signInWithEmailResponse = await signInWithEmailAndPassword(auth, email, password);

    if (signInWithEmailResponse) {
      return signInWithEmailResponse;
    }
  }
  
  const loginWithGoogle = async (): Promise<UserCredential | undefined> => {
    const googleResponse = await signInWithPopup(auth, provider);

    if (googleResponse) {
      return googleResponse;
    }
  }
  
  const reset = (email: string) => sendPasswordResetEmail(auth, email);

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  }

  return <AuthContext.Provider value={{
    loading,
    login, 
    loginWithGoogle, 
    logout,
    register, 
    reset, 
    user, 
    verify
  }}>
    {loading ? null : children}
  </AuthContext.Provider>
}
