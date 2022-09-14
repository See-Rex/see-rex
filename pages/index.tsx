import { useState } from "react";
import type { NextPage } from "next";
import { MantineProvider, Button } from '@mantine/core';

import {BasicHeader, TextField, PassField, LandingBanner} from "../components";
import Basic_Footer from "../components/Basic_Footer";
import Icon_Button from "../components/Icon_Button";
import ResidentialIcon from "../public/residential.svg";


const Home: NextPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    return (
        <MantineProvider>
            <LandingBanner />
            <BasicHeader type="withButtons" theme={isLightTheme? 'light':'dark'} />
            <BasicHeader type="desktop" theme={isLightTheme? 'light':'dark'} />
            <BasicHeader type="mobile" theme={isLightTheme? 'light':'dark'} />
            <Button mb={50} onClick={()=>setIsLightTheme(!isLightTheme)}>Change Theme</Button>
            
            <TextField label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <PassField placeholder={'Your password'} />
            <Basic_Footer type={isLightTheme ? 'light' : 'dark'} />
            <Icon_Button iconSrc={ResidentialIcon} label={"Residential Properties"} />
        </MantineProvider>
    );
};

export default Home;
