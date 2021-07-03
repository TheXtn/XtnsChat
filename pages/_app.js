import '../styles/globals.css'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import styles from '../public/Lay.module.css';
import Link from 'next/link';
import { ChakraProvider, Progress } from "@chakra-ui/react"
import {useSession,signOut} from "next-auth/client";
import React from "react";
import Router from 'next/router'
import {Provider} from "next-auth/client";
import Lay from "../components/Layout/Lay";

const { Header, Content, Footer, Sider } = Layout;

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {

      setLoading(true);
    };
    const end = () => {

      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


  return(

<ChakraProvider>

<Lay>{loading?<Progress size="xs" isIndeterminate />:<Component {...pageProps} />}</Lay>




</ChakraProvider>

      )

}

export default MyApp
