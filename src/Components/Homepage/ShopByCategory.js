import React from "react";
import { Link } from "react-router-dom";

function ShopByCategory(props) {
  return (
    <React.Fragment>
      <div className="layout-heading justify-space-between align-center">
        <h2>{props.heading}</h2>
      </div>
      <div className="product-layout-section custom-grid-product-layout-section">
        <div className="row">
          {props.items.map((item) => {
            return (
              <div key={item.id} className="col-md-3 col-sm-3">
                <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                  <div className="prel-gutter">
                    <Link to={item.link}>
                      <div className="dynamic-img-container">
                        <img src={item.image} alt={item.heading} />
                      </div>
                      <div className="image-gradient"></div>
                      <div className="caption-dynamic-img-container product-layout-caption-dynamic-img-container">
                        <div className="title-layout-product">
                          {item.heading}
                        </div>
                        <div className="layout-shop-now">{item.subheading}</div>
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

export default ShopByCategory;
