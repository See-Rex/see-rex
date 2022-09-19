import { Anchor, Group, Paper } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import BasicFooter from "../BasicFooter";
import BasicHeader from "../BasicHeader";
import PassField from "../PassField";
import StyledButton from "../StyledButton";
import TextField from "../TextField";
import style from "./_index.module.scss";

type Props = {
  theme: 'light' | 'dark';
}

const AuthLayout = (props: Props) => {
  const { theme } = props;
  const [type, toggle] = useToggle(['login', 'register']);

  return (
    <Paper className={style.container}>
      <BasicHeader type={"desktop"} theme={"light"} />
      <form className={style.authForm}>
        <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
        <PassField placeholder={'Your password'} />
        <Anchor
            className={"forgotPass"}
            component="button"
            type="button"
            color="dimmed"
            onClick={() => toggle()}
            size="sm"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Forgot password?"}
          </Anchor>
        <Group grow mb="md" mt="md">
            <StyledButton type='sign-in' theme={theme}>SIGN-IN</StyledButton>
            <StyledButton type='submit' theme={theme}>RESET PASSWORD</StyledButton>
        </Group>
      </form>
      <BasicFooter type={theme} />
    </Paper>
  );
}

export default AuthLayout;
