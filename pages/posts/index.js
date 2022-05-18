import Navbar from "../../components/navbar";
import Title from "../../components/title";
import Layout from "../../components/layout";
import React from "react";
import Link from "next/link";
export default function posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newPosts = await res.json();
      console.log("newPost", newPosts);
      setPosts(newPosts);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Title>Post Page</Title>
      <div>
        {posts.map((post) => {
          return (
            <Link
              href={`/posts/[id]`}
              as={`/posts/${post.id}`}
              key={post.title}
            >
              <a>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <p>Thi is the post page</p>
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
    </Layout>
  );
}
