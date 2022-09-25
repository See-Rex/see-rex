import React from "react";
import { Button, useMantineColorScheme } from "@mantine/core";
import style from "./_index.module.scss";
import { LinkProps } from "next/link";

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

const StyledButton = (params: Omit<LinkProps, "href"> & Button_Params) => {
    const { colorScheme } = useMantineColorScheme();
    const { children, onClick, types } = params;
    return (
        <Button className={`${style[types]} ${style[colorScheme]}`} onClick={onClick}>
            <h1>{children}</h1>
        </Button>
    );
};

export default StyledButton;
