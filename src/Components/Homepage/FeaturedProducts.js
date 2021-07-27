import React from "react";
import { Link } from "react-router-dom";

function FeaturedProducts(props) {

  return (
    <React.Fragment>
      <div className="layout-heading justify-space-between align-center">
        <h2>{props.heading}</h2>
      </div>
      <div className="product-layout-section custom-grid-product-layout-section scroll-custom-grid-product-layout-section">
        <div className="row">
          {props.products.map((product) => {
            return (
              <div key={product.id} className="col-md-3 col-sm-3">
                <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                  <div className="prel-gutter">
                    <Link to={product.link}>
                      <div className="dynamic-img-container">
                        <img src={product.image} alt={product.heading}/>
                      </div>
                      <div className="group-title-panel">
                        <div className="title-ellipsis">{product.heading}</div>
                        <p>{product.subheading}</p>
                        <div className="product-price">{product.price}</div>
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

export default FeaturedProducts;
