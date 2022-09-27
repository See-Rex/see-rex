import { Button, useMantineColorScheme } from "@mantine/core";
import React from "react";
import {
  BasicFooter,
  BasicHeader,
  CollapsedBar,
  IconButton,
  InputField,
  LandingBanner,
  StyledButton,
} from "../components";
import { IconHolidayVillage } from "../public/Icons";
import Link from "next/link";
import ProgressCard from "../components/ProgressCard";

function StoryPage() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <LandingBanner />
      <BasicHeader opened={false}>
        .
        <Link href="/auth/login">
          <StyledButton types="sign-in">SIGN-IN</StyledButton>
        </Link>
        <Link href="/auth/register">
          <StyledButton types="register">REGISTER</StyledButton>
        </Link>
      </BasicHeader>
      <BasicHeader opened={false}>
        <StyledButton types="navigation">Sign-in</StyledButton>
        <StyledButton types="navigation">Register</StyledButton>
      </BasicHeader>
      <Button mb={50} onClick={() => toggleColorScheme()}>
        Change Theme
      </Button>
      <InputField label={"Email"} placeholder={"lezzml.now@gmail.com"} />
      <InputField
        label={"Password"}
        placeholder={"Your password"}
        type="password"
      />
      <BasicFooter height={56} />
      <IconButton
        className="link"
        icon={<IconHolidayVillage />}
        label={"Link Inactive"}
        isFullWidth
      />
      <IconButton
        className="active"
        icon={<IconHolidayVillage />}
        label={"Link Active"}
        isFullWidth
      />
      <CollapsedBar page={0} setPage={() => {}} />
      <ProgressCard
        label="Test"
        stats="3,450"
        progress={3450}
        color="#35C0ED"
        icon="up"
      />
    </>
  );
}

export default StoryPage;
