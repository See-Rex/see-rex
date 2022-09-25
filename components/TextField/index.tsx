import {TextInput, TextInputProps } from '@mantine/core';

const TextField = (props:  Omit<TextInputProps, "input">) => {
  const { error, label, onChange, placeholder, required, value } = props;

  return (
    <TextInput 
      error={error}
      label={label} 
      onChange={onChange}
      placeholder={placeholder} 
      required={required}
      value={value}
      size="md" 
      mb="md" 
      mt="md" 
    />
  );
}

export default TextField;
