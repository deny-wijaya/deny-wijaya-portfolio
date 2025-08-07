import Head from "next/head";
import HomePage3 from "@/ui/v3/home/home3";

const Home = () => {
  return (
    <div className={"w-full bg-white dark:bg-primary"}>
      <Head>
        <link rel="shortcut icon" href="../src/app/__favicon.ico" />
        <title>Deny Wijaya</title>
      </Head>
      <HomePage3 />
    </div>
  );
};

export default Home;
