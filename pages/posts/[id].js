import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function post_d() {
  const router = useRouter();

  return (
    <div>
      <Layout>
      <Head>
        <title>Post #{router.query.id}</title>
        <meta
          name="description"
          content="Descripcón del post seleccionado"
        />
      </Head>
        <Title>Post Details</Title>
        <p>Post ID: {router.query.id}</p>
      </Layout>
      <style jsx global>
        {`
          p {
            color: darkgray;
          }
          p:hover {
            color: pink;
          }
        `}
      </style>
    </div>
  );
}
