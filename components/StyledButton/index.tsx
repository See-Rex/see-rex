import { Button } from '@mantine/core';
import React from 'react';
import style from "./_index.module.scss";

type Button_Params = {
  children: React.ReactNode;
  type: "sign-in" | "register" | "sign-up" | "banner" | "banner2" | "submit" | "card";
  theme: "light" | "dark";
} 

const StyledButton = (params: Button_Params) => {
  const {children, type, theme} = params;
  return (
    <Button className={`${style[type]} ${style[theme]}`}><h1>{children}</h1></Button>
  )
}

export default StyledButton
