import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react'
import { useAuth } from '../../hooks/AuthContext';

function Auth() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }

  return (
    <LoadingOverlay
      loaderProps={{ color: "#2f90b0", size: "xl"}}
      overlayOpacity={0.3}
      overlayColor="#c5c5c5"
      visible
    /> 
  )
}

export default Auth;