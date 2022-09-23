import React from "react";
import { MantineSize, useMantineColorScheme } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const IconSpaceDashboard = (props: Props) => {
    const { colorScheme } = useMantineColorScheme();
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={style[colorScheme]}
                    d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h13.5V9H9v30Zm16.5 0H39V23.95H25.5Zm0-18.05H39V9H25.5Z"
                />
            </svg>
        </div>
    );
};

export default IconSpaceDashboard;
