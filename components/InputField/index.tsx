import { PasswordInput, PasswordInputProps, TextInput, TextInputProps, useMantineColorScheme } from '@mantine/core';

import style from './_index.module.scss';

type Props = {
  type?: 'password' | 'text';
};

const InputField = (props: Props & (TextInputProps | PasswordInputProps)) => {
  const { error, label, onChange, placeholder, required, type, value } = props;
  const { colorScheme } = useMantineColorScheme();

  const Field =
    type == 'password' ? (
      <PasswordInput
        className={style[colorScheme]}
        error={error}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    ) : (
      <TextInput
        className={style[colorScheme]}
        error={error}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    );
  return Field;
};

export default InputField;
