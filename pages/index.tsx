import type { NextPage } from "next";
import { MantineProvider, Button } from '@mantine/core';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_home.module.scss";
import Basic_Header from "../components/Basic_Header";
import Text_Field from "../components/Text_Field";
import Pass_Field from "../components/Pass_Field";
import Basic_Footer from "../components/Basic_Footer";
import Icon_Button from "../components/Icon_Button";
import ResidentialIcon from "../public/residential.svg";
import { useState } from "react";
import Styled_Button from "../components/Styled_Button";

const Home: NextPage = () => {
    const [isFooterLight, setIsFooterLight] = useState(true);

    return (
        <MantineProvider>
            <Basic_Header/>
            <Text_Field label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <Pass_Field placeholder={'Your password'} />
            <Styled_Button type='sign-up'>SIGN-UP</Styled_Button>
            <Styled_Button type='submit'>RESET PASSWORD</Styled_Button>
            <Styled_Button type='card'>Show Details</Styled_Button>
            <Styled_Button type='banner'>Get Started</Styled_Button>
            <Styled_Button type='banner2'>Sign-in</Styled_Button>
            <Button onClick={()=>setIsFooterLight(!isFooterLight)} mt={120}>Change Footer Theme</Button>
            <Basic_Footer type={isFooterLight ? 'light' : 'dark'} />
            <Icon_Button iconSrc={ResidentialIcon} label={"Residential Properties"} />
        </MantineProvider>
    );
};

export default Home;
