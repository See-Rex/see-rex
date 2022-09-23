import { Button, useMantineColorScheme } from "@mantine/core";
import { LinkProps } from "next/link";
import React, { MouseEventHandler } from "react";

import style from "./_index.module.scss";

type Props = Omit<LinkProps, "href"> & {
    icon: React.ReactNode;
    label: string;
    className?: "link" | "active" | "back";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    isFullWidth?: boolean;
};

const IconButton = (props: Props) => {
    const { colorScheme } = useMantineColorScheme();
    const { icon, label, className, onClick, isFullWidth } = props;
    const isIconArrowBack = className?.includes('back');

    const classWithColorScheme = style[colorScheme + '-' + className ?? 'link'];
    const isIconNavButton = !isIconArrowBack && style.iconButton;
    
    const renderButtonContent = isIconArrowBack? label : <h1>{label}</h1>;

    return (
        <Button
            className={`${isIconNavButton} ${classWithColorScheme} ${isIconArrowBack && style.back}`}
            variant="subtle"
            leftIcon={icon}
            fullWidth={isFullWidth}
            size="sm"
            onClick={onClick}
        >
            {renderButtonContent}
        </Button>
    );
};

export default IconButton;
