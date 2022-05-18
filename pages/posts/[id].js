import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function post_d() {
  const router = useRouter();

  return (
    <div>
      <Layout>
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
