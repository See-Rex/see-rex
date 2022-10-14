import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { SeeRexLoader } from '../../components';
import { useAuth } from '../../hooks/AuthContext';

function Auth() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  } else {
    toast('Please login first.');
    router.push('/auth/login');
  }

  return <SeeRexLoader />;
}

export default Auth;