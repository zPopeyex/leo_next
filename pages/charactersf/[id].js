import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function Char({char}) {
    const router = useRouter();

    if (router.isFallback){
        return <div> CARGANDO ...</div>
    }

    return (
        <div>
            <Layout>
                <Title>Character ID: {char.id}</Title>
                <p>Name: {char.name}</p>
                <p>Specie: {char.species}</p>
                <p>Gender: {char.gender}</p>
                <p>Origin: {char.location.name}</p>
                <img src={char.image}></img>
                
            </Layout>
           
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

export async function getStaticPaths(){
    const paths =  [
      { params: { id: '1'} },
      { params: { id: '2'} },
    ];
    return {
      paths,
      fallback: true
    }
  
  }
  
  export async function getStaticProps({params}){
        const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
        const char =  await res.json();
  
        return{
          props:{
            char
          }
        }
  }   