import React from "react";
import { MantineSize } from "@mantine/core";

import style from "./_index.module.scss";

type Props = { size?: MantineSize };

const IconHolidayVillage = (props: Props) => {
    const { size } = props;
    return (
        <div className={style[size || "md"]}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={style.color}
                    d="M4 40V20L16 8l12 12v20Zm3-3h7.5v-6h3v6H25V21.25l-9-9-9 9Zm7.5-11.5v-3h3v3ZM33 40V18.35L22.65 8h4.65l8.7 8.7V40Zm8 0V15.05L33.95 8h4.65l5.4 5.4V40ZM7 37h18H7Z"
                />
            </svg>
        </div>
    );
};

export default IconHolidayVillage;
