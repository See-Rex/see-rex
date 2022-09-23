import React from "react";
import { MantineSize, useMantineColorScheme } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const IconLocationCity = (props: Props) => {
    const { colorScheme } = useMantineColorScheme();
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={style[colorScheme]}
                    d="M6 42V14.1h12.35V9.5L24 4l5.65 5.5v12.9H42V42Zm3-3h5.3v-5.3H9Zm0-8.3h5.3v-5.3H9Zm0-8.3h5.3v-5.3H9ZM21.35 39h5.3v-5.3h-5.3Zm0-8.3h5.3v-5.3h-5.3Zm0-8.3h5.3v-5.3h-5.3Zm0-8.3h5.3V8.8h-5.3ZM33.7 39H39v-5.3h-5.3Zm0-8.3H39v-5.3h-5.3Z"
                />
            </svg>
        </div>
    );
};

export default IconLocationCity;
