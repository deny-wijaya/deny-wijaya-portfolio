// pages/_app.tsx
// import '../../../styles/globals.css'


import '../styles/globals.css';
import Head from "next/head";


function MyApp({Component, pageProps}: { Component: any; pageProps: any }) {
    return <>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
                rel="stylesheet"
            />
            <link rel="icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"/>
        </Head>
        <Component {...pageProps} />
    </>


}

export default MyApp;
