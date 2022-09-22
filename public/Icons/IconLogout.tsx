import React from "react";
import { MantineSize, useMantineColorScheme } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const IconLogout = (props: Props) => {
    const { colorScheme } = useMantineColorScheme();
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={style[colorScheme]}
                    d="M24.45 42v-3H39V9H24.45V6H39q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm-3.9-9.25L18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z"
                />
            </svg>
        </div>
    );
};

export default IconLogout;
