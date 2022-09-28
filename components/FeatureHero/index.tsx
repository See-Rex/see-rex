import { Button, Col, Grid, SimpleGrid, Text, Title } from "@mantine/core";
import {
  IconActivity,
  IconAdjustments,
  IconBackpack,
  IconSearch,
} from "@tabler/icons";
import React from "react";
import { FeatureCard } from "..";

import style from "./_index.module.scss";

function FeatureHero() {
  return (
    <div className={style.wrapper}>
      <Grid gutter={120}>
        <Col span={10} md={5}>
          <Title className={style.title}>
            Manage your real estate.{" "}
            <Text component="span" inherit className={style.highlight}>
              Anytime. Anywhere.
            </Text>
          </Title>
          <Text className={style.description} size="xl" mt="xl">
            Monitor your property. Keep land and home owners information. Build
            a central database. Use data analytics to gain business
            insight.Monitor your property. Keep land and home owners
            information. Build a central database. Use data analytics to gain
            business insight.
          </Text>
          <Button className={style.control} variant="white" size="lg">
            Get started
          </Button>
        </Col>
        <Col span={12} md={7} className={style.features}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: "md", cols: 1 }]}
          >
            <FeatureCard
              description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
              icon={<IconSearch stroke={2} />}
              title="Centralized Database"
            />
            <FeatureCard
              description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
              icon={<IconActivity stroke={2} />}
              title="Centralized Database"
            />
            <FeatureCard
              description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
              icon={<IconAdjustments stroke={2} />}
              title="Centralized Database"
            />
            <FeatureCard
              description="Access all your property’s information within a single website. Search through hundreds of data. Filter just what you need. "
              icon={<IconBackpack stroke={2} />}
              title="Centralized Database"
            />
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}

export default FeatureHero;
