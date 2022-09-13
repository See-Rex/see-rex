import { Button } from '@mantine/core';
import React from 'react'
import style from "./_index.module.scss"

type Button_Params = {
  children: React.ReactNode;
  types?: "sign-in" | "register" | "sign-up" | "banner" | "submit" | "card";
  themes?: "light" | "dark";
} 

const Styled_Button = (params: Button_Params) => {
  const {children, types, themes} = params;
  return (
    <Button className={style[types!]}><h1>{children}</h1></Button>
  )
}

export default Styled_Button