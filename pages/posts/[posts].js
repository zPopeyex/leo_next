import { useRouter } from "next/dist/client/router";
export default function post_d() {
  const router = useRouter();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {router.query.posts}</p>
    </div>
  );
}
