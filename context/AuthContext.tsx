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
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        });
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const verify = (user: User) => {
    return sendEmailVerification(user);
  }

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  }
  
  const reset = (email: string) => {
    return sendPasswordResetEmail(auth, email);
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
