import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function user() {
  const router = useRouter();

  return (
    <div>
      <Layout>
        <Title>User Details</Title>
        <p>User ID: {router.query.id}</p>
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
