import { Container, Divider, Group, RingProgress, Stack, Text } from '@mantine/core'
import React from 'react'
import style from "./_index.module.scss"

type Props = {
    amount: number;
    category: string;
    description?: string;
    icon?: React.ReactNode;
    progressValue?: number;
    type: 'grid' | 'group' |'progress';
}

function StatisticCard(props: Props) {
    const { amount, category, description, icon, progressValue, type } = props;

    const renderGridStatCard = type === 'grid' && <Stack>
        <Group position='apart'>
            <Text className={style.category}>{category}</Text>
            {icon}
        </Group>
        <Text className={style.amount} mt={-15}>{amount}</Text>
        <Text className={style.description} ml={15}>{description}</Text>
    </Stack>;

    const renderProgressStatCard = type === 'progress' && <Group>
        <RingProgress
            size={110}
            thickness={3}
            sections={[
            { value: progressValue || 0, color: '#35C0ED' },
            ]}
            mr={20}
        />
        <Stack>    
            <Text className={style.category}>{category}</Text>        
            <Text className={style.amount} mt={-10}>{amount}</Text>
        </Stack>        
    </Group>;

    return (
        <Container className={style.container} p={25} fluid>
            {renderGridStatCard}
            {renderProgressStatCard}
        </Container>
    )
}

export default StatisticCard
