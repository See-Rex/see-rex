import { ContactIconsList, InputField, TextArea } from '..';
import emailjs from '@emailjs/browser';
import { Button, Group, Modal, ModalProps, SimpleGrid, Text, Title, useMantineColorScheme } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons';
import { IconX } from '@tabler/icons';
import React from 'react';
import style from './_index.module.scss';

const ContactDetails = [
  { description: 'seerex.info.system@gmail.com', icon: <IconAt size={24} />, title: 'Email' },
  { description: '(032) 488 - 9119', icon: <IconPhone size={24} />, title: 'Phone' },
  { description: 'N.Bacalso Street, Cebu City, Philippines', icon: <IconMapPin size={24} />, title: 'Address' },
  { description: '8 a.m. – 11 p.m.', icon: <IconSun size={24} />, title: 'Working hours' },
];

function ContactUsForm(props: ModalProps) {
  const { colorScheme } = useMantineColorScheme();

  const form = useForm({
    initialValues: {
      from_email: '',
      from_name: '',
      message: '',
    },

    validate: {
      from_email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      from_name: (val) => (/^[a-zA-Z0-9\s]*$/.test(val) ? null : 'Special Characters are not allowed'),
    },
  });

  const sendEmail = () => {
    try {
      emailjs.send('service_deb5i4s', 'template_qm5qt2d', form.values, 'zGfkmEBnLMLx6m_Zd');
      props.onClose;
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal
      radius={15}
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
        <SimpleGrid cols={1} className={style.close} mb={20}>
          <ActionIcon component={IconX} className={`${style.icon} ${style[colorScheme]}`} onClick={props.onClose} />
        </SimpleGrid>
        <SimpleGrid cols={2} spacing={50} breakpoints={[{ cols: 1, maxWidth: 'md' }]}>
          <div>
            <Title className={style.title}>Contact us</Title>
            <Text className={style.description} mt="sm" mb={30}>
              Leave us an email and we will get back to you within 24 business hours
            </Text>
            <ContactIconsList data={ContactDetails} />
          </div>
          <form className={`${style.form} ${style[colorScheme]}`} onSubmit={form.onSubmit(sendEmail)}>
            <InputField
              required
              label={'Full Name'}
              placeholder={'Juan Dela Cruz'}
              error={form.errors.from_name && 'Special Characters are not allowed'}
              value={form.values.from_name}
              onChange={(event) => form.setFieldValue('from_name', event.currentTarget.value)}
            />
            <InputField
              required
              label={'Email'}
              placeholder={'yourmail@email.com'}
              error={form.errors.from_email && 'Invalid email'}
              value={form.values.from_email}
              onChange={(event) => form.setFieldValue('from_email', event.currentTarget.value)}
            />
            <TextArea
              required
              label={'Message'}
              placeholder={'I would like to inquire for your service'}
              value={form.values.message}
              onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
              minRows={3}
            />
            <Group position="right" mt="md">
              <Button className={`${style.control} ${style[colorScheme]}`} type="submit">
                Send message
              </Button>
            </Group>
          </form>
        </SimpleGrid>
      </div>
    </Modal>
  );
}

export default ContactUsForm;
