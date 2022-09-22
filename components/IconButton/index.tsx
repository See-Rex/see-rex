import { Button } from "@mantine/core";
import { LinkProps } from "next/link";

import style from "./_index.module.scss";

type Props = Omit<LinkProps, "href"> & {
    icon: React.ReactNode;
    label: string;
    className?: "link" | "active";
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
            <h1>{label}</h1>
        </Button>
    );
};

export default IconButton;
