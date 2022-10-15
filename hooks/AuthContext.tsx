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
import toast from 'react-hot-toast';
import { auth } from '../config/firebase';

type SeeRexUser = {
  displayName: string,
  email: string,
  emailVerified: boolean,
  uid: string,
}

type UserContextType = {
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
    try {
      const createUserWithEmailResponse = await createUserWithEmailAndPassword(auth, email, password);

      
      if (createUserWithEmailResponse.user) {
        toast.success('Successfully created an account!');
        
        return createUserWithEmailResponse;
      }
    } catch (e) {
      toast.error('Failed to register account.');
      console.log(e);
    }
  }

  const verify = (user: User) => {
    try {
      sendEmailVerification(user);
      toast('We have sent a verification link to your email! Please open it to verify your account.');
    } catch (e) {
      toast.error('Failed to send email verification.');
    }
  }

  const login = async (email: string, password: string): Promise<UserCredential | undefined> => {
    try {
      const signInWithEmailResponse = await signInWithEmailAndPassword(auth, email, password);

      if (signInWithEmailResponse && signInWithEmailResponse.user.emailVerified) {
        toast.success('Successfully signed in.');

        return signInWithEmailResponse;
      } else if (signInWithEmailResponse && !signInWithEmailResponse.user.emailVerified) {
        toast.error('Your account has not been verified yet. Please check your email.');
        logout();
      }
    } catch (e) {
      toast.error('Invalid user credentials.');
    }
  }
  
  const loginWithGoogle = async (): Promise<UserCredential | undefined> => {
    try {
      const googleResponse = await signInWithPopup(auth, provider);

      if (googleResponse) {
        toast.success('Successfully signed in');

        return googleResponse;
      }
    } catch (e) {
      toast.error('Failed to sign in with Google.');
    }
  }
  
  const reset = async (email: string) => {
    try {
      const resetResponse = await sendPasswordResetEmail(auth, email);

      return resetResponse;
    } catch (e) {
      toast.error('Failed to send reset password to email.');
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
