import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/AuthContext';
import LandingLayout from '../layouts/LandingLayout';

const Home: NextPage = () => {
  const authContext = useAuth();
  const router = useRouter();

  if (authContext?.user) {
    router.push('/auth');
  }

  return <LandingLayout />;
};

export default Home;
