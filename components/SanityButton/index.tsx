import { Button, ButtonProps } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import IconSanity from '../../public/Icons/SanityIcon.webp';

const SanityButton = (props: ButtonProps) => {
  const router = useRouter();

  function handleSanityLogin() {
    router.push('https://seerex-superadmin.sanity.studio/');
  }

  return <Button 
      leftIcon={<Image src={IconSanity} height={20} width={20} alt={'Sanity Icon'} />} 
      variant="default" 
      color="gray" 
      onClick={handleSanityLogin}
      {...props}
    />;
};

export default SanityButton;
