import { useRouter } from "next/dist/client/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function post_d() {
  const router = useRouter();

  return (
    <div>
      <p>╔═══════ ≪ •❈• ≫ ═══════╗</p>
      <Navbar />
      <p>╚═══════ ≪ •❈• ≫ ═══════╝</p>
      <Title>Post Details</Title>
      <p>Post ID: {router.query.id}</p>
    </div>
  );
}
