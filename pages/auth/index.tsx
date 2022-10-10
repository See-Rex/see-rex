import { useRouter } from 'next/router';
import React from 'react'
import SeeRexLoader from '../../components/SeeRexLoader';
import { useAuth } from '../../hooks/AuthContext';

function Auth() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  } else {
    alert('Please login first.');
    router.push('/auth/login');
  }

  return (
    <SeeRexLoader />
  )
}

export default Auth;
