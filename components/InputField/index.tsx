import { PasswordInput, TextInputProps } from "@mantine/core";
import TextField from "../TextField";

type Props = {
    type?: "password" | "text";
};

const InputField = (props: Omit<TextInputProps, "input"> & Props) => {
    const { error, label, onChange, placeholder, required, type, value } = props;
    const Field =
        type == "password" ? (
            <PasswordInput
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
