import {
  PasswordInput,
  PasswordInputProps,
  TextInput,
  TextInputProps,
  useMantineColorScheme,
} from "@mantine/core";

import style from "./_index.module.scss";

type Props = {
  type?: "password" | "text";
};

const TextField = (props: TextInputProps) => {
  const { error, label, onChange, placeholder, required, value } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
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
};

const PassField = (props: PasswordInputProps) => {
  const { error, label, onChange, placeholder, required, value } = props;
  const { colorScheme } = useMantineColorScheme();

  return (
    <PasswordInput
      className={style[colorScheme]}
      error={error}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      value={value}
    />
  );
};

const InputField = (props: Props & (TextInputProps | PasswordInputProps)) => {
  const { error, label, onChange, placeholder, required, type, value } = props;

  const Field =
    type == "password" ? (
      <PassField
        error={error}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      />
    ) : (
      <TextField
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
