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
      <Box mr="md">{props.icon}</Box>
      <div>
        <Text size="xs" className={style.title}>
          {props.title}
        </Text>
        <Text className={style.description}>{props.description}</Text>
      </div>
    </div>
  );
};

export default ContactIcon;
