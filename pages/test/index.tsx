import React from "react";
import StatisticCard from "../../components/StatisticCard";
import { IconLocationCity } from "../../public/Icons";

function TestPage() {
    return (
        <>
            <StatisticCard 
                progressValue={30} 
                amount={10000} 
                category={'CATEGORY'} 
                type={'progress'} 
            />
            <StatisticCard 
                amount={10000} 
                category={'CATEGORY'} 
                description="Lorem ipsum dolor sit amet" 
                icon={<IconLocationCity size='lg' />}
                type={'grid'} 
            />
        </>
    );
}

export default TestPage;
