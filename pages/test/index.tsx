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
            <StatisticCard 
                amount={500} 
                amount2={500} 
                amount3={500} 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                description2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                description3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                type={'group'} 
            />
        </>
    );
}

export default TestPage;
