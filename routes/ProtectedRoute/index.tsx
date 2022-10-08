import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.emailVerified === false) {
      alert('Your account has not been verified yet. Please check your email.');
      router.push('/auth/login');
    } else if (user && user.emailVerified) {
      return;
    } else {
      alert('Please login first.');
      router.push('/auth/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return <>{user && user.emailVerified ? children : null}</>;
}

export default ProtectedRoute;
