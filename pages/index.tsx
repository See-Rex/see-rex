import type { NextPage } from "next";
import { MantineProvider } from '@mantine/core';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_home.module.scss";
import Basic_Header from "../components/Basic_Header/index";

const Home: NextPage = () => {
    return (
        <MantineProvider>
            <Basic_Header/>
        </MantineProvider>
    );
};

export default Home;
