import { TextInput } from '@mantine/core';

type Props = {
  label: string;
  placeholder: string;
}

const Text_Field = (props: Props) => {
  const { label, placeholder } = props;

  return <TextInput label={label} placeholder={placeholder} size="md" />;
}

export default Text_Field;
