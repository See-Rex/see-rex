import React from 'react'

type Button_Params = {
    child: React.ReactNode;
    type: "sign-in" | "register" | "sign-up" | "banner" | "submit" | "card";
    theme: "light" | "dark";
} 

const Button_SignIn = (params: Button_Params) => {
  return (
    <div>{params.child}</div>
  )
}

export default Button_SignIn