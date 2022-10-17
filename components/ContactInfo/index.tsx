import { Avatar, Button, Group, Modal, ModalProps, Text, useMantineColorScheme } from '@mantine/core';
import { IconAt, IconPhoneCall } from '@tabler/icons';
import React from 'react';
import style from './_index.module.scss';

interface Props {
  avatar: string;
  name: string;
  type: string;
  phone: string;
  email: string;
  showForm: () => void;
}

function ContactInfo(props: Props & ModalProps) {
  const { colorScheme } = useMantineColorScheme();
  const { avatar, email, name, phone, type } = props;

  return (
    <Modal
      radius={10}
      opened={props.opened}
      onClose={props.onClose}
      padding={0}
      overlayColor={colorScheme === 'light' ? '#848484' : '#121212'}
      overlayOpacity={0.25}
      overlayBlur={2}
      withCloseButton={false}
      size="auto"
      centered
    >
      <div className={`${style.wrapper} ${style[colorScheme]}`}>
        <Group noWrap>
          <Avatar src={avatar} size={94} radius="md" className={`${style.avatar} ${style[colorScheme]}`} />
          <div>
            <Text
              size="xs"
              sx={{ textTransform: 'uppercase' }}
              className={`${style.text} ${style[colorScheme]}`}
              weight={700}
            >
              {type} Property Owner
            </Text>

            <Text size="lg" weight={500} className={`${style.name} ${style[colorScheme]}`}>
              {name}
            </Text>

            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size={16} className={`${style.icon} ${style[colorScheme]}`} />
              <Text size="xs" className={`${style.text} ${style[colorScheme]}`}>
                {email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall stroke={1.5} size={16} className={`${style.icon} ${style[colorScheme]}`} />
              <Text size="xs" className={`${style.text} ${style[colorScheme]}`}>
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
        <Button
          variant={colorScheme === 'light' ? 'default' : 'filled'}
          color={colorScheme === 'light' ? 'default' : 'gray'}
          fullWidth
          mt="md"
          onClick={() => {
            props.showForm();
            props.onClose();
          }}
        >
          Send Message
        </Button>
      </div>
    </Modal>
  );
}

export default ContactInfo;
