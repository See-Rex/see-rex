import {TextInput, TextInputProps } from '@mantine/core';

const TextField = (props:  Omit<TextInputProps, "input">) => {
  const { label, placeholder } = props;

  return <TextInput label={label} placeholder={placeholder} size="md" mb="md" mt="md" />;
}

export default TextField;
