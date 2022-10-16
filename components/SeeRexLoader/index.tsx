import { LoadingOverlay, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import LoadingDark from '../../public/LoadingDark.svg';
import LoadingLight from '../../public/LoadingLight.svg';

type Props = {
  opacity: number;
};

function SeeRexLoader({ opacity }: Props) {
  const { colorScheme } = useMantineColorScheme();

  const customLoader = colorScheme === 'light' ? <LoadingLight height={50} /> : <LoadingDark height={50} />;
  const color = colorScheme === 'light' ? '#f5f5f5' : '#121212';

  return <LoadingOverlay loader={customLoader} overlayColor={color} overlayOpacity={opacity} overlayBlur={2} visible />;
}

export default SeeRexLoader;
