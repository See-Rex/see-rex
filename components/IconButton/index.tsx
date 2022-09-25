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
