import { Button } from "@mantine/core";
import Image from "next/image";

import style from "./_index.module.scss";

type Props = {
    iconSrc: string;
    label: string;
    className: string;
};

const IconButton = (props: Props) => {
    const { iconSrc, label, className } = props;

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
            fullWidth
            size="sm"
        >
            <h1>{label}</h1>
        </Button>
    );
};

export default IconButton;
