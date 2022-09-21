import { PasswordInput } from '@mantine/core';

type Props = {
  label: string;
  placeholder: string;
}

const PassField = (props: Props) => {
  const { label, placeholder } = props;

  return <PasswordInput label={label} placeholder={placeholder} size="md" mt="md"  />;
}

export default PassField;
