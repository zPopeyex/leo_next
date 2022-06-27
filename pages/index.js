import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next Proyect API</title>
        <meta
          name="description"
          content="Proyecto personal para el fortalecimiento del consumo de apis"
        />
      </Head>
      <div>
        <Title>Home Page</Title>
      </div>
    </Layout>
  );
}
