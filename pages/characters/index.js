import Layout from "../../components/layout";
import Link from "next/link";

export default function characters ({characters}){

    return(
        <Layout>
            <Title>Characters page</Title>
            <p>This is the Characters page</p>
            <div className='grid'>
              {characters.map(character => {
                  return(
                      <Link href={'/characters/[id]'} as={`/characters/${character.id}`}>
                          <a className='card'>
                            <h3>character</h3>
                            <p>Name: {character.name}</p>
                          </a>
                     
                     
                      </Link>
                  )
              })}  

            </div>
        </Layout>
    )

}