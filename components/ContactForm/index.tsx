import { ContactIconsList, InputField, TextArea } from '..';
import emailjs from '@emailjs/browser';
import { ActionIcon, Button, Group, Modal, ModalProps, SimpleGrid, Text, useMantineColorScheme, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAddressBook, IconAt, IconHomeSearch, IconPhone, IconX } from '@tabler/icons';
import React from 'react';
import style from './_index.module.scss';

type Props = {
  email: string;
  name: string;
  phone: string;
  type: 'Commercial' | 'Residential' | 'Land';
};

function ContactForm(props: Props & ModalProps) {
  const { colorScheme } = useMantineColorScheme();

  const contactDetails = [
    { description: props.name, icon: <IconAddressBook size={24} />, title: 'Property Owner' },
    { description: props.type, icon: <IconHomeSearch size={24} />, title: 'Property Type' },
    { description: props.email, icon: <IconAt size={24} />, title: 'Email' },
    { description: props.phone, icon: <IconPhone size={24} />, title: 'Phone' },
  ];

  const form = useForm({
    initialValues: {
      message: '',
      subject: '',
    },
  });

  const sendEmail = () => {
    try {
      emailjs.send(
        'service_nzup63p',
        'template_gg4u1zj',
        {
          message: form.values.message,
          subject: form.values.subject,
          to_email: props.email,
          to_name: props.name,
          type: props.type,
        },
        'zGfkmEBnLMLx6m_Zd'
      );
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
      <Stack className={`${style.wrapper} ${style[colorScheme]}`}>
        <SimpleGrid cols={1} className={style.close}>
          <ActionIcon component={IconX} className={`${style.icon} ${style[colorScheme]}`} onClick={props.onClose} />
        </SimpleGrid>
        <SimpleGrid cols={2} breakpoints={[{ cols: 1, maxWidth: 'sm' }]}>
          <div className={`${style.contacts} ${style[colorScheme]}`}>
            <Text size="lg" weight={700} className={style.title} sx={{ color: '#fff' }}>
              Contact information
            </Text>

            <ContactIconsList data={contactDetails} />
          </div>

          <form className={style.form} onSubmit={form.onSubmit(sendEmail)}>
            <Text size="lg" weight={700} className={`${style.title} ${style[colorScheme]}`}>
              Get in touch
            </Text>

            <div className={style.fields}>
              <SimpleGrid cols={1} breakpoints={[{ cols: 1, maxWidth: 'sm' }]}>
                <InputField
                  mt="md"
                  required
                  label={'Subject'}
                  placeholder={'Purpose of Email'}
                  value={form.values.subject}
                  onChange={(event) => form.setFieldValue('subject', event.currentTarget.value)}
                />
                <TextArea
                  mt="md"
                  required
                  label={'Message'}
                  placeholder={'Please include all relevant information'}
                  value={form.values.message}
                  onChange={(event) => form.setFieldValue('message', event.currentTarget.value)}
                  minRows={3}
                />
              </SimpleGrid>
              <Group position="right" mt="md">
                <Button type="submit" className={`${style.control} ${style[colorScheme]}`}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </SimpleGrid>
      </Stack>
    </Modal>
  );
}

export default ContactForm;
