import React from "react";
import { Link } from "react-router-dom";

function HomeSecondarySlide(props) {
  return (
    <section className="static-section">
      <div className="container-fluid">
        <div className="static-slide">
          <Link to="/">
            <img
              src="images/show-ban-slide.jpg"
              align="show-ban-slide"
              className="img-responsive center-block"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeSecondarySlide;
