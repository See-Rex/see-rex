import { LoadingOverlay, useMantineColorScheme } from '@mantine/core'
import React from 'react'

function SeeRexLoader() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <LoadingOverlay
      loaderProps={{ color: colorScheme === 'light' ? "cyan" : "grey", size: "xl"}}
      overlayOpacity={0.3}
      overlayColor={colorScheme === 'light' ? "white" : "black"}
      visible
    /> 
  )
}

export default SeeRexLoader