import { AppShell, Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import { useRouter } from 'next/router';
import { BasicFooter, BasicHeader } from '../components';

const useStyles = createStyles((theme) => ({
  description: {
    margin: 'auto',
    marginBottom: theme.spacing.xl * 1.5,
    marginTop: theme.spacing.xl,
    maxWidth: 500,
  },

  label: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    fontSize: 220,
    fontWeight: 900,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,

    textAlign: 'center',
  },

  root: {
    paddingBottom: 80,
    paddingTop: 80,
  },

  title: {
    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 38,
    fontWeight: 900,

    textAlign: 'center',
  },
}));

function ErrorPage() {
  const { classes } = useStyles();
  const router = useRouter();

  function handleNavigate() {
    router.push('/');
  }

  return (
    <AppShell
            header={<BasicHeader opened={false} burger />}
            footer={<BasicFooter height={56} />}
        >
          <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>You have found a secret place.</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
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
