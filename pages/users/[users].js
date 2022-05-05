import { useRouter } from "next/router";

export default function user() {
  const router = useRouter();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {router.query.users}</p>
    </div>
  );
}
