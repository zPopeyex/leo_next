import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div className="card d-flex flex-column align-items-center p-2">
          <img
            src="https://wallpaperaccess.com/full/1396544.jpg"
            className="card-img rounded-4 mx-auto  w-50 vh- p-4 "
          ></img>
          <div className="card-body w-50">
            <h5 className="card-title">Card title</h5>
            <div className="d-flex justify-content-around ">
              <a href="/" className="btn btn-primary">
                Home
              </a>
              <a href="/users" className="btn btn-primary">
                Users
              </a>
              <a href="/posts" className="btn btn-primary">
                Posts
              </a>
              <a href="/charactersf" className="btn btn-primary">
                Characters
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center">
        <div>╔═══════ ≪ •❈• ≫ ═══════╗ </div>
        <Navbar />
        <div>╚═══════ ≪ •❈• ≫ ═══════╝</div>
        <main>{children}</main>
      </div>
    </>
  );
}
