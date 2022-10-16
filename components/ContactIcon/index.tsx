import { Box, Text } from '@mantine/core';
import style from './_index.module.scss';

type ContactIconProps = {
  icon: React.ReactNode;
  description: React.ReactNode;
  title: React.ReactNode;
};

const ContactIcon = (props: ContactIconProps) => {
  return (
    <div className={style.wrapper}>
      <Box mr="md" className={style.text}>
        {props.icon}
      </Box>
      <div>
        <Text size="xs" className={style.text}>
          {props.title}
        </Text>
        <Text className={style.text}>{props.description}</Text>
      </div>
    </div>
  );
};

export default ContactIcon;
