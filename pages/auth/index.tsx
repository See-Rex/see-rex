import { useRouter } from 'next/router';
import React from 'react';
import { SeeRexLoader } from '../../components';
import { useAuth } from '../../hooks/AuthContext';

function Auth() {
  const authContext = useAuth();
  const router = useRouter();

  if (authContext?.user?.emailVerified) {
    router.push('/dashboard');
  } else {
    router.push('/auth/login');
  }

  return <SeeRexLoader opacity={1} />;
}

export default Auth;
