import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <p>Texto desde Layout</p>
      <main>{children}</main>
      <style></style>
    </div>
  );
}
