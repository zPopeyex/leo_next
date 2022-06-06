import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function User({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div> CARGANDO ...</div>;
  }

  return (
    <div>
      <Layout>
        <Title>User ID {user.id}</Title>
        <h2>┏━━━━━━━━━━━━━━━┓</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <h2>┗━━━━━━━━━━━━━━━┛</h2>
      </Layout>
      <style>
        {`
          p {
          color: darkgray;
          }
          p:hover{
          color: pink;
          }

        `}
      </style>
      <style jsx>
        {`
          nav {
            padding-top: 10px;
          }
          a {
            padding: 0 14px;
          }
        `}
      </style>

      <style jsx>
        {`
            .grid {
              display: flex;
              flex-wrap: wrap;
              max-width: 800px;
              margin-top: 2rem;
            }
            .card {
              margin: 1rem;
              flex-basis: 45%;
              padding: 1.5rem;
              color: black;
              text-decoration: none;
              border: 2px solid #eaeaea;
              border-radius: 10px;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
            .card:hover,
            .card:focus
            .card:active{
              color: #0070f3;
            }
            .card h3 {
              margin . 0 0 1rem 0;
              front-size: 1.25rem;
            }
            
            `}
      </style>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();
  // const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];

  const paths = users.map((user) => {
    return {
      params: { id: `user.id` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
