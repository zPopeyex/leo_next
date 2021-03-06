import Head from "next/head";
import Title from "../../components/title";
import Layout from "../../components/layout";
import Link from "next/link";

export default function chars({ chars }) {
  return (
    <Layout>
      <Title>Character's Page</Title>
      <p> This the characters page</p>
      <div className="grid">
        {chars.map((char) => {
          return (
            <Link href={"/charactersf/[id]"} as={`/charactersf/${char.id}`}>
              <a className="card">
                <h3>Character ID: {char.id}</h3>
                <p>Name: {char.name}</p>
                <p>Specie: {char.species}</p>
                <p>Gender: {char.gender}</p>
                <p>Origin: {char.location.name}</p>
                <img src={char.image}></img>
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
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const chars = await res.json();

  return {
    props: {
      chars: chars.results,
    },
  };
}
