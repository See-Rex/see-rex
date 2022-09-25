import { PasswordInput, TextInput } from "@mantine/core";

type Props = {
    label?: string;
    placeholder: string;
    type?: "password" | "text";
};

const InputField = (props: Props) => {
    const { label, placeholder, type } = props;
    const Field =
        type == "password" ? (
            <PasswordInput
                label="Password"
                placeholder={placeholder}
                size="md"
                mb="md" 
                mt="md"
            />
        ) : (
            <TextInput label={label} placeholder={placeholder} size="md" mb="md" mt="md" />
        );

    return Field;
};

export default InputField;
