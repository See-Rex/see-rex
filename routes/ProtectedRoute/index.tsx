import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const authContext = useAuth();
  const user = authContext?.user;
  const router = useRouter();

  useEffect(() => {
    if (user && user.emailVerified === false || !user) {
      router.push('/auth');
    }
    
  }, [user]);

  return <>{user && user.emailVerified ? children : null}</>;
}

export default ProtectedRoute;
