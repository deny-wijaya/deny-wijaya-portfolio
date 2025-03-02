import Head from "next/head";
import HomePage2 from "@/ui/v2/home/home2";

const Home = () => {

    return (
        <div className={'w-full'}>
            <Head>
                <link rel="shortcut icon" href="../src/app/__favicon.ico"/>
            </Head>
            <HomePage2/>
        </div>
    )
}

export default Home