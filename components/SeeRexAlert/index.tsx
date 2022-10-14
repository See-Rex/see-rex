import { Toaster } from 'react-hot-toast';

import React from 'react'
import { useMantineColorScheme } from '@mantine/core';

export default function SeeRexAlert() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: colorScheme === 'light'? '#08376b' : '#151d1f',
          color: '#f5f5f5',
        },

        // Default options for specific types
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

