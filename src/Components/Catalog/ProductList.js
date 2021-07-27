import React, {useState, useEffect} from "react";
import { getAppCategoryProducts } from "../../Services/ProductListing";
import LoadingComponent from "../Common/LoadingComponent";
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
    const [products, setProductsList] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);
    const [showError, setShowError] = useState(false);


    const getCategoryProducts = () => {
        console.log('pageCategory: ', props.pageCategory);
        return Promise.all([
            getAppCategoryProducts([`category_id=${props.pageCategory}`]),
        ]);
    };

    useEffect(() => {
        getCategoryProducts()
        .then(([categoryProducts]) => {setProductsList(categoryProducts);})
        .catch((err) => {console.log(err);setShowError(true)})
        .finally(() => {setProductsLoaded(true);})
    },[props.pageCategory]);

  return (
    <React.Fragment>
      <div className="inner-lisitng-slide">
        <img src={props.banner} alt="leg-index-slide" />
      </div>

      <div className="product-lisiting-section">
        <div className="layout-heading justify-space-between align-center">
          <h2>{props.pageHeading} {props.pageCategory}</h2>
        </div>
        <div className="product-layout-section custom-grid-product-layout-section">
          <div className="row">
              {!productsLoaded && <LoadingComponent/>}
              {productsLoaded && products.length <= 0 && <span className="text-danger">No Product Found!</span>}
              {productsLoaded && products.length > 0 && products.map((product) => !product.dtls ? null : <ProductListItem key={product.product_id} product={product} wrapperColumn="col-md-3 com-sm-4"/>)}
              {showError && <span className="text-danger">Server Error!</span>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
