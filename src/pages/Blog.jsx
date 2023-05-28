import { connect } from "react-redux";
import Blogs from "../components/Blogs";
import ScrollToTop from "react-scroll-to-top";
import ScrollToTop2 from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Blog({ products }) {
  return (
    <div>
      <ScrollToTop smooth />
      <ScrollToTop2 smooth />
      <div className="d_d_d">
        <div className="d__header">
          <Link to="/dekor/">ƏSAS SƏHİFƏ</Link>
          <span> / </span>
          <span>Blog</span>
        </div>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Blog);
