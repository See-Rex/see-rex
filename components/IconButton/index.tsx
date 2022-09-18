import { Button } from '@mantine/core';
import Image from 'next/image';

import style from "./_index.module.scss";

type Props = {
    iconSrc: string;
    label: string;
}

const IconButton = (props: Props) => {
  const { iconSrc, label } = props;

  return <Button 
    className={style.inner} 
    variant="white"
    leftIcon={
        <Image
            src={iconSrc}
            alt={label}
            width={30}
            height={30}
        />
    }>  
        {label}
    </Button>;
}

export default IconButton;
