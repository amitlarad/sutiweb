import React from "react";
import { Link } from "react-router-dom";

function Slides(props) {
  console.log(props.slides);
  if (!props.slides) {
    return <h1>No SLides</h1>;
  }
  return (
    <section className="placeholder-image-portfolio">
      <div className="container-fluid">
        <div className="row">
          {props.slides.map((slide) => {
            return(
                <div key={slide.id} className="col-md-4 col-sm-4">
              <div className="placeholder-image-portfolio-panel">
                <div className="prel-gutter">
                  <Link to={slide.link}>
                    <div className="dynamic-img-container">
                      <img src={slide.image} alt=""/>
                    </div>
                    <div className="image-gradient"></div>
                    <div className="caption-dynamic-img-container">
                      {slide.heading}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Slides;
