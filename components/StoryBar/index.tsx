import { StyledButton } from "..";
import {
  Navbar,
  NavbarProps,
  ScrollArea,
  useMantineColorScheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import IconButton from "../IconButton";
import style from "./_index.module.scss";
import { IconLogout } from "./../../public/Icons";

type Props = {
  page: number;
  setPage: (val: number) => void;
};

function StoryBar(props: Omit<NavbarProps, "children"> & Props) {
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();

  const { hidden, page, setPage } = props;

  return (
    <Navbar
      hidden={hidden}
      width={{ sm: 350 }}
      p="md"
      className={style[colorScheme]}
    >
      <Navbar.Section component={ScrollArea} grow>
        <StyledButton
          spacing="xs"
          types={page == 1 ? "active" : "navigation"}
          onClick={() => setPage(1)}
          fullWidth
        >
          AppCard
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 2 ? "active" : "navigation"}
          onClick={() => setPage(2)}
          fullWidth
        >
          Basic Footer
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 3 ? "active" : "navigation"}
          onClick={() => setPage(3)}
          fullWidth
        >
          Basic Header
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 4 ? "active" : "navigation"}
          onClick={() => setPage(4)}
          fullWidth
        >
          Collapsable Bar
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 5 ? "active" : "navigation"}
          onClick={() => setPage(5)}
          fullWidth
        >
          Feature Card
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 6 ? "active" : "navigation"}
          onClick={() => setPage(6)}
          fullWidth
        >
          Feature Hero
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 7 ? "active" : "navigation"}
          onClick={() => setPage(7)}
          fullWidth
        >
          Google Button
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 8 ? "active" : "navigation"}
          onClick={() => setPage(8)}
          fullWidth
        >
          Group Card
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 9 ? "active" : "navigation"}
          onClick={() => setPage(9)}
          fullWidth
        >
          Icon Button
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 10 ? "active" : "navigation"}
          onClick={() => setPage(10)}
          fullWidth
        >
          Input Field
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 11 ? "active" : "navigation"}
          onClick={() => setPage(11)}
          fullWidth
        >
          Landing Banner
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 12 ? "active" : "navigation"}
          onClick={() => setPage(12)}
          fullWidth
        >
          Main Footer
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 13 ? "active" : "navigation"}
          onClick={() => setPage(13)}
          fullWidth
        >
          Progress Bar
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 14 ? "active" : "navigation"}
          onClick={() => setPage(14)}
          fullWidth
        >
          Statistic Card
        </StyledButton>
        <StyledButton
          spacing="xs"
          types={page == 15 ? "active" : "navigation"}
          onClick={() => setPage(15)}
          fullWidth
        >
          Styled Button
        </StyledButton>
      </Navbar.Section>
      <Navbar.Section className={style.footer}>
        <IconButton
          className="link"
          icon={<IconLogout />}
          label={"Dev Handout"}
          onClick={() => {
            router.push("/dev");
          }}
          isFullWidth
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default StoryBar;
