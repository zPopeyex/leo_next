import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"
export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/charactersf">
        <a>Character</a>      
      </Link>
      <style jsx>
        {`
          nav {
            padding-top: 1px;
          }
          a {
            margin: 4px;
          }
        `}
      </style>
      {/* <Link href="/posts/[id]" as={`/posts/${3}`}>
        <a>Posts #3</a>
      </Link> */}
    </nav>
  );
}
