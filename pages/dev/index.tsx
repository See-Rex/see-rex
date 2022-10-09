import { Button, Image, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  AppCard,
  BasicFooter,
  BasicHeader,
  CollapsedBar,
  FeatureCard,
  FeatureHero,
  GroupCard,
  IconButton,
  InputField,
  LandingBanner,
  MainFooter,
  ProgressCard,
  StatisticCard,
  StyledButton,
} from "../../components";
import { tempValues } from "../../pseudodata";
import { IconHolidayVillage } from "../../public/Icons";

function DevHandout() {
  const { toggleColorScheme } = useMantineColorScheme();
  const data = [
    {
      description:
        "24% more than in the same month last year, 33% more that two years ago",
      stats: "456,133",
      title: "Page views",
    },
    {
      description:
        "13% less compared to last month, new user engagement up by 6%",
      stats: "2,175",
      title: "New users",
    },
    {
      description:
        "1994 orders were completed this month, 97% satisfaction rate",
      stats: "1,994",
      title: "Completed orders",
    },
  ];

  return (
    <>
      <FeatureHero />
      <LandingBanner />
      <BasicHeader opened={false}>
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
      <MainFooter height={56} />
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
      <CollapsedBar page={0} setPage={() => null} />
      <StatisticCard
        amount={100}
        category="Testing"
        description="This how your statistics are shown"
      />
      <ProgressCard
        label="Test"
        stats="3,450"
        progress={3450}
        color="#35C0ED"
        icon="up"
      />
      <GroupCard data={data} />
      <FeatureCard
        description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
        icon={undefined}
        title="Centralized Database"
      />
      <AppCard
        image={
          <Image src={"../background2.png"} alt={"homePic"} height={180} />
        }
        title={"Home Property #1"}
        type={"Residential"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        values={tempValues}
      />
    </>
  );
}

export default DevHandout;
