import { PasswordInput } from '@mantine/core';
import style from "./_index.module.scss";

type Props = {
  placeholder: string;
}

const PassField = (props: Props) => {
  const { placeholder } = props;

  return <PasswordInput label="Password" placeholder={placeholder} size="md" />;
}

export default PassField;
