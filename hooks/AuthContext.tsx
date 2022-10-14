import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup, 
  signOut,
  User
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { auth } from '../config/firebase';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
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

  const register = async (email: string, password: string) => {
    try {
      const createUserWithEmailResponse = await createUserWithEmailAndPassword(auth, email, password);

      return createUserWithEmailResponse;
    } catch (e) {
      toast(e);
    }
  }

  const verify = async (user: User) => {
    try {
      const sendEmailVerificationResponse = await sendEmailVerification(user);

      return sendEmailVerificationResponse;
    } catch (e) {
      toast(e);
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const signInWithEmailResponse = await signInWithEmailAndPassword(auth, email, password);

      return signInWithEmailResponse;
    } catch (e) {
      toast(e);
    }
  }
  
  const loginWithGoogle = async () => {
    try {
      const googleResponse = await signInWithPopup(auth, provider);

      return googleResponse;
    } catch (e) {
      toast(e);
    }
  }
  
  const reset = async (email: string) => {
    try {
      const resetResponse = await sendPasswordResetEmail(auth, email);

      return resetResponse;
    } catch (e) {
      toast(e);
    }
  }

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  }

  return <AuthContext.Provider value={{
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
