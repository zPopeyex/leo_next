import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Layout({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center p-2 ">
          <img
            src="https://wallpaperaccess.com/full/1396544.jpg"
            className="card-img rounded-4 w-50 vh- p-5 "
          ></img>
          <div className="card-body w-50">
            
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
        <h1 onClick={() => setCounter(counter + 1)}>Counter interno: {counter}</h1>
        <main>{children}</main>
      </div>
    </>
  );
}
