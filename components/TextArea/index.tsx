import { Textarea, TextareaProps, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import style from './_index.module.scss';

function TextArea(props: TextareaProps) {
  const { error, label, minRows, onChange, placeholder, required, value } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <Textarea
      className={style[colorScheme]}
      error={error}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      value={value}
      minRows={minRows}
    />
  );
}

export default TextArea;
