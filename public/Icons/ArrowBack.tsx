import React from "react";
import { MantineSize, useMantineColorScheme } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const ArrowBack = (props: Props) => {
    const { colorScheme } = useMantineColorScheme();
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path 
                    className={style[colorScheme]}
                    d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"
                />
            </svg>
        </div>
    );
};

export default ArrowBack;
