import { PasswordInput, TextInputProps } from "@mantine/core";
import TextField from "../TextField";

const InputField = (props: Omit<TextInputProps, "input">) => {
    const { error, label, onChange, placeholder, required, value } = props;
    const Field =
        label == "Password" || label == "Confirm Password" ? (
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
