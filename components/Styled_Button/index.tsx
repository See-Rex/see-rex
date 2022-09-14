import { Button } from '@mantine/core';
import React from 'react'
import style from "./_index.module.scss"

type Button_Params = {
  children: React.ReactNode;
  types: "sign-in" | "register" | "sign-up" | "banner" | "submit" | "card";
  theme: "light" | "dark";
} 

const Styled_Button = (params: Button_Params) => {
  const {children, types, theme} = params;
  return (
    <Button className={`${style[types]} ${style[theme]}`}><h1>{children}</h1></Button>
  )
}

export default Styled_Button