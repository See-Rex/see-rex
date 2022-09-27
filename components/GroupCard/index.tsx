import React from "react";
import { Text, useMantineColorScheme } from "@mantine/core";
import style from "./_index.module.scss";

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

function GroupCard({ data }: StatsGroupProps) {
  const { colorScheme } = useMantineColorScheme();

  const stats = data.map((stat) => (
    <div key={stat.title} className={style.stat}>
      <Text className={style.count}>{stat.stats}</Text>
      <Text className={style.title}>{stat.title}</Text>
      <Text className={style.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={`${style.root} ${style[colorScheme]}`}>{stats}</div>;
}

export default GroupCard;
