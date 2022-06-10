import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return ( <>
    <div>
      <div className="mt-3 mb-3 d-flex justify-content-center">
        <img height="250"  src="https://wallpaperaccess.com/full/1396544.jpg" ></img>
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
