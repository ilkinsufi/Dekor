import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function NotFound() {
  return (
    <>
      <ScrollToTop smooth />

      <div className="notfound-main">
        <div className="notfound">
          <div id="notfound">
            <div className="notfound-404">
              <h1>
                4<span></span>4
              </h1>
            </div>
            <h2>OOPS! BELƏ SƏHİFƏ YOXDUR</h2>
            <p>
             Ola bilsin ki,
              silinib ya da adı dəyişdirilib.
            </p>
            <Link className="notfounda" to={"/dekor/"}>
              Geri dönmək üçün kliklə
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
