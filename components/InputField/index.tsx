import {
    PasswordInput,
    TextInput,
    PasswordInputProps,
    TextInputProps,
} from "@mantine/core";

type Props = {
    type?: "password" | "text";
};

const TextField = (props: TextInputProps) => {
    const { error, label, onChange, placeholder, required, value } = props;
    return (
        <TextInput
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
    return (
        <PasswordInput
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
    const { error, label, onChange, placeholder, required, type, value } =
        props;
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
