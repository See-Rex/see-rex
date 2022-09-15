import { useState } from "react";
import type { NextPage } from "next";
import { MantineProvider, Button } from '@mantine/core';
import styles from "../styles/_home.module.scss";

import {BasicHeader, TextField, PassField, StyledButton, LandingBanner} from "../components";
import Basic_Footer from "../components/Basic_Footer";
import Icon_Button from "../components/Icon_Button";
import ResidentialIcon from "../public/residential.svg";

const Home: NextPage = () => {
    const [isFooterLight, setIsFooterLight] = useState(true);

    return (
        <MantineProvider>
            <BasicHeader>
                <StyledButton type='sign-in'>SIGN-IN</StyledButton>
                <StyledButton type='register'>REGISTER</StyledButton>
            </BasicHeader>
            <LandingBanner />
            <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <PassField placeholder={'Your password'} />
            <Button onClick={()=>setIsFooterLight(!isFooterLight)} mt={120}>Change Footer Theme</Button>
            <Basic_Footer type={isFooterLight ? 'light' : 'dark'} />
            <Icon_Button iconSrc={ResidentialIcon} label={"Residential Properties"} />
        </MantineProvider>
    );
};

export default Home;
