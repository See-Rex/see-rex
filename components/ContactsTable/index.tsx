import { ActionIcon, Anchor, Avatar, Badge, Group, ScrollArea, Table, Text, useMantineColorScheme } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';
import style from './_index.module.scss';

type UsersTableProps = {
  data: { address: string; avatar: string; name: string; type: string; email: string; phone: string }[];
};

const badgeColors: Record<string, string> = {
  commercial: 'blue',
  land: 'green',
  residential: 'cyan',
};

export default function ContactsTable({ data }: UsersTableProps) {
  const { colorScheme } = useMantineColorScheme();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
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
          href="#"
          onClick={(event) => event.preventDefault()}
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
        <Text size="sm" color="dimmed" className={`${style.text} ${style[colorScheme]}`}>
          {item.address}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconInfoCircle size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th className={`${style.text} ${style[colorScheme]}`}>Property Owner</th>
            <th className={`${style.text} ${style[colorScheme]}`}>Property Type</th>
            <th className={`${style.text} ${style[colorScheme]}`}>Email</th>
            <th className={`${style.text} ${style[colorScheme]}`}>Phone</th>
            <th className={`${style.text} ${style[colorScheme]}`}>Address</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
