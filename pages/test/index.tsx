import React from "react";
import ProgressStatCard from "../../components/ProgressStatCard";

function TestPage() {
    return (
        <ProgressStatCard progressValue={30} amount={10000} category={'Category'} />
    );
}

export default TestPage;
