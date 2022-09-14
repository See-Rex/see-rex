import { TextInput } from '@mantine/core';
import style from "./_index.module.scss";

type Props = {
  label: string;
  placeholder: string;
}

const TextField = (props: Props) => {
  const { label, placeholder } = props;

  return <TextInput label={label} placeholder={placeholder} size="md" />;
}

export default TextField;
