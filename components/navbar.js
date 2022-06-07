import Link from "next/link";

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
            padding-top: 12px;
          }
          a {
            padding: 0 8px;
          }
        `}
      </style>
      {/* <Link href="/posts/[id]" as={`/posts/${3}`}>
        <a>Posts #3</a>
      </Link> */}
    </nav>
  );
}
