import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <Title>Home Page</Title>
      <p>This is the home Page</p>
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
    </Layout>
  );
}
