import React, { MouseEventHandler } from "react";
import { Button, useMantineColorScheme } from "@mantine/core";
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
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = (params: Button_Params) => {
    const { colorScheme } = useMantineColorScheme();
    const { children, onClick, types } = params;
    return (
        <Button className={`${style[types]} ${style[colorScheme]}`} onClick={onClick}>
            <h1>{children}</h1>
        </Button>
    );
};

export default StyledButton;
