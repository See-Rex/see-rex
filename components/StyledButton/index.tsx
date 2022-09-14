import { Button } from '@mantine/core';
import React from 'react'
import style from "./_index.module.scss"

type Props = {
  children: React.ReactNode;
  type?: "sign-in" | "register" | "sign-up" | "banner" | "submit" | "card";
} 

const StyledButton = (props: Props) => {
  const {children, type} = props;
  
  return (
    <Button className={style[type!]}><h1>{children}</h1></Button>
  )
}

export default StyledButton