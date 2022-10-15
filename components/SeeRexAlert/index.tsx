import { useMantineColorScheme } from '@mantine/core';

import React from 'react'
import { Toaster } from 'react-hot-toast';

export default function SeeRexAlert() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        style: {
          background: colorScheme === 'light'? '#f5f5f5' : '#121212',
          color: colorScheme === 'light'? '#121212' : '#f5f5f5',
        },

        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
  );
}

