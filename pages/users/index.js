import Head from "next/head";
import Title from "../../components/title";
import Layout from "../../components/layout";
import Link from "next/link";

export default function users({ users }) {
  return (
    <Layout>
      <Head>
        <title>Next Users </title>
        <meta
          name="description"
          content="Lista donde encontraremos a todos los usuarios registrados"
        />
      </Head>
      <Title>Users Page</Title>
      <div className="grid">
        {users.map((user) => {
          return (
            <Link href={"/users/[id]"} as={`/users/${user.id}`}>
              <a className="card">
                <h3>User: {user.id}</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
              </a>
            </Link>
          );
        })}
      </div>
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

      <style>
        {`
          p {
          color: darkgray;
          align-self: center;
          }
          p:hover{
          color: pink;
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
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
