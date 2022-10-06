import { AppShell, Button, Container, Group, Text, Title, useMantineColorScheme } from '@mantine/core';
import { useRouter } from 'next/router';
import { BasicFooter, BasicHeader } from '../components';
import style from "./_index.module.scss";

function ErrorPage() {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();

  function handleNavigate() {
    router.push('/');
  }

  return (
    <AppShell
          className={`${style.shell} ${style[colorScheme]}`}
          header={<BasicHeader opened={false} burger />}
          footer={<BasicFooter height={56} />}
        >
          <Container className={`${style.root} ${style[colorScheme]}`}>
            <div className={`${style.label} ${style[colorScheme]}`}>404</div>
            <Title className={`${style.title} ${style[colorScheme]}`}>You have found a secret place.</Title>
            <Text color="dimmed" size="lg" align="center" className={style.description}>
              Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
              been moved to another URL.
            </Text>
            <Group position="center">
              <Button variant="subtle" size="md" onClick={handleNavigate}>
                Take me back to home page
              </Button>
            </Group>
          </Container>
      </AppShell>
  );
}

export default ErrorPage;
