import { Button } from "@mantine/core";
import Image from "next/image";
import React, { MouseEventHandler } from "react";

import style from "./_index.module.scss";

type Props = {
    iconSrc: string;
    label: string;
    className: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
    const { iconSrc, label, className, onClick } = props;

    return (
        <Button
            className={style[className]}
            variant="subtle"
            leftIcon={
                <Image
                    objectFit="contain"
                    height={30}
                    width={30}
                    src={iconSrc}
                    alt={label}
                />
            }
            size="sm"
            onClick={onClick}
        >
            {label}
        </Button>
    );
};

export default IconButton;
