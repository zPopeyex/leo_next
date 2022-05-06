import { useRouter } from "next/dist/client/router";
import Navbar from "../../components/navbar";

export default function post_d() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h1>Post Details</h1>
      <p>Post ID: {router.query.id}</p>
    </div>
  );
}
