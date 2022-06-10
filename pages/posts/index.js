import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Layout from "../../components/layout";
import React from "react";
import Link from "next/link";
export default function posts({ posts }) {
  // Render side client

  // React.useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const newPosts = await res.json();
  //     console.log("newPost", newPosts);
  //     setPosts(newPosts);
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <Layout>
      <Title>Post Page</Title>
      <p>Thi is the post page</p>
      <div className="grid">
        {posts.map((post) => {
          return (
            <Link
              href={`/posts/[id]`}
              as={`/posts/${post.id}`}
              key={post.title}
            >
              <a className="card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          );
        })}
      </div>
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

//Corre del lado del servidor
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
