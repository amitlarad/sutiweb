import React from "react";
import { Link } from "react-router-dom";

function TopMenuNav(props) {
  if (props.categories.length <= 0) {
    return null;
  } else {
    return (
      <ul className="navbar-nav navbar-light menu">
        {props.categories.map((category) => {
          return (
            <li
              key={category.category_id}
              className="nav-item dropdown megamenu-li dmenu"
            >
              <Link
                to={
                  category.childs.length > 0
                    ? "#"
                    : `/shop-by-category/${category.dtls.name}/${category.category_id}`
                }
                className={
                  category.childs.length > 0
                    ? "nav-link menu_category_name dropdown-toggle"
                    : "menu_category_name nav-link"
                }
                id={"dropdown" + category.category_id}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {category.dtls.name}
              </Link>
              <div
                className={
                  category.childs.length > 0
                    ? "dropdown-menu megamenu sm-menu border-top"
                    : "hidden"
                }
                aria-labelledby={"dropdown" + category.category_id}
              >
                <div className="row">
                  <div className="col-sm-4">
                    <ul className="list-unstyled childs_1">
                      {category.childs.map((subcategory) => {
                        return (
                          <li key={subcategory.category_id}>
                            <Link
                              to={`/shop-by-category/${subcategory.dtls.name}/${subcategory.category_id}`}
                            >
                              {subcategory.dtls.name} <span>(98)</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* Featured Product of Category */}
                  <div className="col-md-8">
                    <div className="realted-products-section">
                      <div className="menu-products-panel">
                        <Link to="#">
                          <div className="image-overflow">
                            <img
                              src="/images/porttex-img-001.jpg"
                              alt="porttex-img-001"
                            />
                          </div>
                          <h4 className="ellipsis">Lorem ipsum</h4>
                          <p className="ellipsis-two-line">
                            Cobalt Blue Hand Embroidered Kurta Set
                          </p>
                          <div className="price-tag">₹ 13,160</div>
                        </Link>
                      </div>

                      <div className="menu-products-panel">
                        <Link to="#">
                          <div className="/image-overflow">
                            <img
                              src="/images/porttex-img-002.jpg"
                              alt="porttex-img-002"
                            />
                          </div>
                          <h4 className="ellipsis">Lorem ipsum</h4>
                          <p className="ellipsis-two-line">
                            Cobalt Blue Hand Embroidered Kurta Set
                          </p>
                          <div className="price-tag">₹ 13,160</div>
                        </Link>
                      </div>

                      <div className="menu-products-panel">
                        <Link to="#">
                          <div className="image-overflow">
                            <img
                              src="/images/porttex-img-003.jpg"
                              alt="porttex-img-003"
                            />
                          </div>
                          <h4 className="ellipsis">Lorem ipsum</h4>
                          <p className="ellipsis-two-line">
                            Cobalt Blue Hand Embroidered Kurta Set
                          </p>
                          <div className="price-tag">₹ 13,160</div>
                        </Link>
                      </div>

                      <div className="menu-products-panel">
                        <Link to="#">
                          <div className="image-overflow">
                            <img
                              src="/images/porttex-img-004.jpg"
                              alt="porttex-img-004"
                            />
                          </div>
                          <h4 className="ellipsis">Lorem ipsum</h4>
                          <p className="ellipsis-two-line">
                            Cobalt Blue Hand Embroidered Kurta Set
                          </p>
                          <div className="price-tag">₹ 13,160</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Featured Product of Category */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TopMenuNav;
