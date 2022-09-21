import { Button } from "@mantine/core";
import React, { MouseEventHandler } from "react";
import style from "./_index.module.scss";

type Button_Params = {
    children: React.ReactNode;
    types:
        | "sign-in"
        | "register"
        | "sign-up"
        | "banner"
        | "submit"
        | "card"
        | "navigation";
    theme: "light" | "dark";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = (params: Button_Params) => {
  const {children, types, theme, onClick} = params;
  return (
    <Button className={`${style[types]} ${style[theme]}`} onClick={onClick} size="sm" mb="md" mt="md" >
      <h1>{children}</h1>
    </Button>
  )
}

export default StyledButton;
