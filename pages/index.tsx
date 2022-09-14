import type { NextPage } from "next";
import { MantineProvider } from '@mantine/core';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_home.module.scss";
import Basic_Header from "../components/Basic_Header";
import Text_Field from "../components/Text_Field";
import Pass_Field from "../components/Pass_Field";
import Icon_Button from "../components/Icon_Button";
import ResidentialIcon from "../public/residential.svg";

const Home: NextPage = () => {
    return (
        <MantineProvider>
            <Basic_Header/>
            <Text_Field label={'Email'} placeholder={'lezzml.now@gmail.com'} />
            <Pass_Field placeholder={'Your password'} />
            <Icon_Button iconSrc={ResidentialIcon} label={"Residential Properties"} />
        </MantineProvider>
    );
};

export default Home;
