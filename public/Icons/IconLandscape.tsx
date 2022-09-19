import React from "react";
import { MantineSize } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const IconLandscape = (props: Props) => {
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={style.color}
                    d="m2 36 12-16 9.75 13H40L28 17.05l-6.25 8.3-1.9-2.5L28 12l18 24Zm25.5-3ZM8 33h12l-6-8Zm0 0h12Z"
                />
            </svg>
        </div>
    );
};

export default IconLandscape;
