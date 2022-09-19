import { Button } from "@mantine/core";
import { LinkProps } from "next/link";
import React, { MouseEventHandler } from "react";

import style from "./_index.module.scss";

type Props = Omit<LinkProps, "href"> & {
    icon: React.ReactNode;
    label: string;
    className?: "link" | "active" | "backToLogin";
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
    const { icon, label, className, onClick } = props;

    return (
        <Button
            className={style[className || "link"]}
            variant="subtle"
            leftIcon={icon}
            fullWidth
            size="sm"
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default IconButton;
