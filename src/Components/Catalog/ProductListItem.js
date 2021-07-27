import React from "react";
import { Link } from "react-router-dom";
import { productImagePrefix } from "../../Services/ApiConstants";

const ProductListItem = (props) => {
  const product = props.product;
  return (
    <div
      className={
        !props.wrapperColumn ? "col-md-4 col-sm-4" : props.wrapperColumn
      }
    >
      <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
        <div className="prel-gutter">
          <Link to="#">
            <div className="dynamic-img-container">
              <img
                src={`${productImagePrefix}${product.image}`}
                alt="index-product-lisitng"
              />
            </div>
            <div className="group-title-panel">
              <div className="title-ellipsis">{product.dtls.name}</div>
              <div className="product-price">₹ {product.price}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
