import { Stack } from '@mantine/core';

import ContactIcon from '../ContactIcon';

type ContactIconProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
};

type ContactIconsListProps = {
  data: ContactIconProps[];
};

export default function ContactIcons({ data }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
