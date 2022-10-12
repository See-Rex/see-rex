import { Stack } from '@mantine/core';
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons';
import ContactIcon from '../ContactIcon';

type ContactIconProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
};

type ContactIconsListProps = {
  data?: ContactIconProps[];
};

const ContactDetails = [
  { description: 'seerex.info.system@gmail.com', icon: <IconAt size={24} />, title: 'Email' },
  { description: '(032) 488 - 9119', icon: <IconPhone size={24} />, title: 'Phone' },
  { description: 'N.Bacalso Street, Cebu City, Philippines', icon: <IconMapPin size={24} />, title: 'Address' },
  { description: '8 a.m. – 11 p.m.', icon: <IconSun size={24} />, title: 'Working hours' },
];

export default function ContactIcons({ data = ContactDetails }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
