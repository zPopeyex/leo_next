import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function posts() {
  return (
    <Layout>
      <Title>Post Page</Title>
      <p>Thi is the post page</p>
      <style>
        {`
          p {
          color: darkgray;
          }
          p:hover{
          color: darkred;
          }

        `}
      </style>
    </Layout>
  );
}
