import { PasswordInput } from '@mantine/core';

type Props = {
  placeholder: string;
}

const Text_Field = (props: Props) => {
  const { placeholder } = props;

  return <PasswordInput label="Password" placeholder={placeholder} size="md" />;
}

export default Text_Field;
