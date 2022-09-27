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
import GroupCard from "./../components/GroupCard/index";
import StatisticCard from "../components/StatisticCard";
import FeatureCard from "../components/FeatureCard";
import FeatureHero from "../components/FeatureHero";
import MainFooter from "../components/MainFooter";

function StoryPage() {
  const { toggleColorScheme } = useMantineColorScheme();
  const data = [
    {
      title: "Page views",
      stats: "456,133",
      description:
        "24% more than in the same month last year, 33% more that two years ago",
    },
    {
      title: "New users",
      stats: "2,175",
      description:
        "13% less compared to last month, new user engagement up by 6%",
    },
    {
      title: "Completed orders",
      stats: "1,994",
      description:
        "1994 orders were completed this month, 97% satisfaction rate",
    },
  ];

  return (
    <>
      <FeatureHero />
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
      <CollapsedBar page={0} setPage={() => {}} />
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
    </>
  );
}

export default StoryPage;
