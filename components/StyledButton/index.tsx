import React from "react";
import { Button, MantineSize, useMantineColorScheme } from "@mantine/core";
import style from "./_index.module.scss";
import { LinkProps } from "next/link";

type TypeParams = {
  children: React.ReactNode;
  spacing?: MantineSize;
  fullWidth?: boolean;
  types:
    | "sign-in"
    | "register"
    | "sign-up"
    | "banner"
    | "submit"
    | "card"
    | "navigation"
    | "active";
};

const StyledButton = (params: TypeParams & Omit<LinkProps, "href">) => {
  const { colorScheme } = useMantineColorScheme();
  const { children, fullWidth, onClick, spacing, types } = params;

  return (
    <Button
      className={`${style[types]} ${style[colorScheme]}`}
      onClick={onClick}
      type="submit"
      mb={spacing}
      fullWidth={fullWidth}
    >
      <h1>{children}</h1>
    </Button>
  );
};

export default StyledButton;
