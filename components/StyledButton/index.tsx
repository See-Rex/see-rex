import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
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
};

const StyledButton = (params: Button_Params) => {
    const { colorScheme } = useMantineColorScheme();
    const { children, types } = params;
    return (
        <Button className={`${style[types]} ${style[colorScheme]}`}>
            <h1>{children}</h1>
        </Button>
    );
};

export default StyledButton;
