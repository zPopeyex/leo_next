import { useRouter } from "next/dist/client/router";
export default function posts() {
  const router = useRouter();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {posts.query.posts}</p>
    </div>
  );
}
