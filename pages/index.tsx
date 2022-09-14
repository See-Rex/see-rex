import type { NextPage } from "next";
import { Button, MantineProvider } from '@mantine/core';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_home.module.scss";
import Basic_Header from "../components/Basic_Header/index";
import Text_Field from "../components/Text_Field";
import Pass_Field from "../components/Pass_Field";
import { useState } from "react";

const Home: NextPage = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    return (
        <MantineProvider>
            <Basic_Header type="withButtons" theme={isLightTheme? 'light':'dark'} />
            <Basic_Header type="desktop" theme={isLightTheme? 'light':'dark'} />
            <Basic_Header type="mobile" theme={isLightTheme? 'light':'dark'} />
            <Button mb={50} onClick={()=>setIsLightTheme(!isLightTheme)}>Change Theme</Button>
            <Text_Field label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <Pass_Field placeholder={'Your password'} />
        </MantineProvider>
    );
};

export default Home;
