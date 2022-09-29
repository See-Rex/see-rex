import { Button, useMantineColorScheme } from "@mantine/core";
import { LinkProps } from "next/link";
import React from "react";

import style from "./_index.module.scss";

type Props = {
  icon: React.ReactNode;
  label: string;
  className?: "link" | "active" | "back";
  isFullWidth?: boolean;
};

const IconButton = (props: Omit<LinkProps, "href"> & Props) => {
  const { colorScheme } = useMantineColorScheme();
  const { icon, label, className, onClick, isFullWidth } = props;
  return (
    <Button
      className={`${style[colorScheme]} ${style[className || "link"]}`}
      variant="subtle"
      leftIcon={icon}
      fullWidth={isFullWidth}
      size="sm"
      onClick={onClick}
    >
      <h1>{label}</h1>
    </Button>
  );
};

export default IconButton;
