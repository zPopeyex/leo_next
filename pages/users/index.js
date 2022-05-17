import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function users() {
  return (
    <Layout>
      <Title>Users Page</Title>
      <p>This is the users page</p>
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
