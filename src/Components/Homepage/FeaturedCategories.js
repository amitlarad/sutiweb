import React from "react";
import { Link } from "react-router-dom";

function FeaturedCategories(props) {
  if (!props.categories) {
    return null;
  }
  return (
    <React.Fragment>
      <div className="layout-heading justify-space-between align-center">
        <h2>{props.heading}</h2>
      </div>
      <div className={props.vertical ? 'product-layout-section' : 'product-layout-section custom-grid-product-layout-section'}>
        <div className="row">
          {props.categories.map((category) => {
            return (
              <div key={category.heading} className={props.vertical ? 'col-md-3 col-sm-3' : 'col-md-4 col-sm-4'}>
                <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                  <div className="prel-gutter">
                    <Link to={category.link}>
                      <div className="dynamic-img-container">
                        <img src={category.image} alt={category.heading} />
                      </div>
                      <div className="image-gradient"></div>
                      <div className="caption-dynamic-img-container product-layout-caption-dynamic-img-container">
                        <div className="title-layout-product">
                          {category.heading}
                        </div>
                        <div className="layout-shop-now">{category.subheading}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default FeaturedCategories;
