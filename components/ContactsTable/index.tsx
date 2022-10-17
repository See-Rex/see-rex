import { ContactForm, ContactInfo } from '..';
import { ActionIcon, Anchor, Avatar, Badge, Group, ScrollArea, Table, Text, useMantineColorScheme } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';
import { useState } from 'react';
import style from './_index.module.scss';

type ContactType = 'Land' | 'Commercial' | 'Residential';

type UsersTableProps = {
  data: { avatar: string; name: string; type: ContactType; email: string; phone: string }[];
};

const badgeColors: Record<string, string> = {
  commercial: 'blue',
  land: 'green',
  residential: 'cyan',
};

export default function ContactsTable({ data }: UsersTableProps) {
  const { colorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const [popup, setPopup] = useState(false);
  const [contactData, setContactData] = useState({ avatar: '', email: '', name: '', phone: '', type: '' as ContactType });

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} className={`${style.avatar} ${style[colorScheme]}`} />
          <Text size="sm" weight={500} className={`${style.text} ${style[colorScheme]}`}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>
        <Badge
          color={badgeColors[item.type.toLowerCase()]}
          variant={colorScheme === 'dark' ? 'light' : 'outline'}
          className={`${style.badge} ${style[colorScheme]}`}
        >
          {item.type}
        </Badge>
      </td>
      <td>
        <Anchor<'a'>
          size="sm"
          onClick={() => {
            setContactData({ avatar: item.avatar, email: item.email, name: item.name, phone: item.phone, type: item.type });
            setOpened(true);
          }}
          className={`${style.text} ${style[colorScheme]}`}
        >
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed" className={`${style.text} ${style[colorScheme]}`}>
          {item.phone}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon
            onClick={() => {
              setContactData({
                avatar: item.avatar,
                email: item.email,
                name: item.name,
                phone: item.phone,
                type: item.type,
              });
              setPopup(true);
            }}
          >
            <IconInfoCircle size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <ContactForm
        opened={opened}
        onClose={() => setOpened(false)}
        email={contactData.email}
        name={contactData.name}
        phone={contactData.phone}
        type={contactData.type}
      />
      <ContactInfo
        opened={popup}
        onClose={() => setPopup(false)}
        avatar={contactData.avatar}
        email={contactData.email}
        name={contactData.name}
        phone={contactData.phone}
        showForm={() => setOpened(true)}
        type={contactData.type}
      />
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="md">
          <thead>
            <tr>
              <th className={`${style.text} ${style[colorScheme]}`}>Property Owner</th>
              <th className={`${style.text} ${style[colorScheme]}`}>Property Type</th>
              <th className={`${style.text} ${style[colorScheme]}`}>Email</th>
              <th className={`${style.text} ${style[colorScheme]}`}>Phone</th>
              <th />
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
