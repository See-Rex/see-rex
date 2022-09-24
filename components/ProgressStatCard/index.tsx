import { Container, Group, RingProgress, Stack, Text } from '@mantine/core'
import React from 'react'
import style from "./_index.module.scss"

type Props = {
    amount: number;
    category: string;
    progressValue: number;
}

function ProgressStatCard(props: Props) {
    const { amount, category, progressValue } = props;

    return (
        <Container p={25} fluid>
            <Group>
                <RingProgress
                    size={110}
                    thickness={3}
                    sections={[
                    { value: progressValue, color: '#35C0ED' },
                    ]}
                    mr={20}
                />
                <Stack>    
                    <Text className={style.category}>{category}</Text>        
                    <Text className={style.amount} mt={-10}>{amount}</Text>
                </Stack>        
            </Group>
        </Container>
    )
}

export default ProgressStatCard
