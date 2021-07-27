import React from "react";
import ApplicationTemplate from "./Layouts/ApplicationTemplate";
import { Link } from "react-router-dom";
import ProductListItem from "../Components/Catalog/ProductListItem";
import ProductList from "../Components/Catalog/ProductList";

function ShopByCategory({ match }) {
  if (!match.params.categoryId) {
    return (
      <ApplicationTemplate>
        <section className="global-space-section">
          <div className="lisitng-index">
            <div className="container-fluid">
              <div className="row">
                <div className="panel panel-danger">
                  <div className="panel-heading">Nothing found!</div>
                  <div className="panel-body">Invalid Category!</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ApplicationTemplate>
    );
  } else {
    return (
      <ApplicationTemplate>
        <section className="global-space-section">
          <div className="lisitng-index">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="filter-section">
                    <div className="breadcums-filter">
                      <ul>
                        <li>
                          <Link to="#">Home</Link>
                        </li>
                        <li>
                          <Link to="#">Womens</Link>
                        </li>
                        <li className="active">Lehengas</li>
                      </ul>
                    </div>

                    <h4>Category</h4>

                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                      name=""
                    />

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="leng-001" />
                              <label for="leng-001">
                                <span className="product-span">Lehenga</span>{" "}
                                <span className="counts">(1399)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="leng-002" />
                              <label for="leng-002">
                                <span className="product-span">
                                  Embroidered Lehenga
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="leng-003" />
                              <label for="leng-003">
                                <span className="product-span">
                                  Bridal Lehenga
                                </span>{" "}
                                <span className="counts">(1029)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="leng-004" />
                              <label for="leng-004">
                                <span className="product-span">
                                  Cocktail Lehenga
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="leng-002" />
                              <label for="leng-002">
                                <span className="product-span">
                                  Embroidered Lehenga
                                </span>{" "}
                                <span className="counts">(67)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>

                    <h4>Designer</h4>

                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                      name=""
                    />

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-001" />
                              <label for="lengs-001">
                                <span className="product-span">
                                  Seema Gujral
                                </span>{" "}
                                <span className="counts">(1399)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-002" />
                              <label for="lengs-002">
                                <span className="product-span">
                                  Pink Peacock Couture
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-003" />
                              <label for="lengs-003">
                                <span className="product-span">
                                  Tarun Tahiliani
                                </span>{" "}
                                <span className="counts">(1029)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-004" />
                              <label for="lengs-004">
                                <span className="product-span">
                                  Payal Singhal
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-005" />
                              <label for="lengs-005">
                                <span className="product-span">
                                  Aneesh Agarwaal
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-006" />
                              <label for="lengs-006">
                                <span className="product-span">
                                  Aneesh Agarwaal
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-007" />
                              <label for="lengs-007">
                                <span className="product-span">
                                  Anushree Reddy
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-008" />
                              <label for="lengs-008">
                                <span className="product-span">
                                  Megha & Jigar
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="lengs-009" />
                              <label for="lengs-009">
                                <span className="product-span">
                                  Vandana Sethi
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>

                    <h4>Size</h4>

                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                      name=""
                    />

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-001" />
                              <label for="sizes-001">
                                <span className="product-span">XS</span>{" "}
                                <span className="counts">(1399)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-002" />
                              <label for="sizes-002">
                                <span className="product-span">S</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-003" />
                              <label for="sizes-003">
                                <span className="product-span">M</span>{" "}
                                <span className="counts">(1029)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-004" />
                              <label for="sizes-004">
                                <span className="product-span">L</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-005" />
                              <label for="sizes-005">
                                <span className="product-span">XL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-006" />
                              <label for="sizes-006">
                                <span className="product-span">XXL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-007" />
                              <label for="sizes-007">
                                <span className="product-span">3XL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-008" />
                              <label for="sizes-008">
                                <span className="product-span">4XL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-009" />
                              <label for="sizes-009">
                                <span className="product-span">5XL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-010" />
                              <label for="sizes-010">
                                <span className="product-span">6XL</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-011" />
                              <label for="sizes-011">
                                <span className="product-span">
                                  Custom Tailored
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="sizes-012" />
                              <label for="sizes-012">
                                <span className="product-span">Free Size</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>

                    <h4>Color</h4>

                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                      name=""
                    />

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group blush-pink">
                              <input type="checkbox" id="colors-001" />
                              <label for="colors-001">
                                <span className="product-span">Blush Pink</span>{" "}
                                <span className="counts">(1399)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group white">
                              <input type="checkbox" id="colors-002" />
                              <label for="colors-002">
                                <span className="product-span">White</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group pink">
                              <input type="checkbox" id="colors-003" />
                              <label for="colors-003">
                                <span className="product-span">Pink</span>{" "}
                                <span className="counts">(1029)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group red">
                              <input type="checkbox" id="colors-004" />
                              <label for="colors-004">
                                <span className="product-span">Red</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group yellow">
                              <input type="checkbox" id="colors-005" />
                              <label for="colors-005">
                                <span className="product-span">Yellow</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group peach">
                              <input type="checkbox" id="colors-006" />
                              <label for="colors-006">
                                <span className="product-span">Peach</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group green">
                              <input type="checkbox" id="colors-007" />
                              <label for="colors-007">
                                <span className="product-span">Green</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group powder-blue">
                              <input type="checkbox" id="colors-008" />
                              <label for="colors-008">
                                <span className="product-span">
                                  Powder Blue
                                </span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group purple">
                              <input type="checkbox" id="colors-009" />
                              <label for="colors-009">
                                <span className="product-span">Purple</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group black">
                              <input type="checkbox" id="colors-010" />
                              <label for="colors-010">
                                <span className="product-span">Black</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group grey">
                              <input type="checkbox" id="colors-011" />
                              <label for="colors-011">
                                <span className="product-span">Grey</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group beige">
                              <input type="checkbox" id="colors-012" />
                              <label for="colors-012">
                                <span className="product-span">Beige</span>{" "}
                                <span className="counts">(99)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>

                    <h4>Discount</h4>

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="discount-001" />
                              <label for="discount-001">
                                <span className="product-span">0% - 20%</span>{" "}
                                <span className="counts">(280)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="discount-002" />
                              <label for="discount-002">
                                <span className="product-span">21% - 30%</span>{" "}
                                <span className="counts">(500)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="discount-003" />
                              <label for="discount-003">
                                <span className="product-span">31% - 40%</span>{" "}
                                <span className="counts">(45)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="discount-004" />
                              <label for="discount-004">
                                <span className="product-span">41% - 50%</span>{" "}
                                <span className="counts">(69)</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="discount-005" />
                              <label for="discount-005">
                                <span className="product-span">51% - 60%</span>{" "}
                                <span className="counts">(44)</span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>

                    <h4>Shipping Time</h4>

                    <div className="filter_checkboxes">
                      <div className="filter_checkboxes-panel">
                        <ul>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-001" />
                              <label for="days-001">
                                <span className="product-span">3 Days</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-002" />
                              <label for="days-002">
                                <span className="product-span">7 Days</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-003" />
                              <label for="days-003">
                                <span className="product-span">1-2 Weeks</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-004" />
                              <label for="days-004">
                                <span className="product-span">2-3 Weeks</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-005" />
                              <label for="days-005">
                                <span className="product-span">3-4 Weeks</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-006" />
                              <label for="days-006">
                                <span className="product-span">4-5 Weeks</span>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="filter-form-group">
                              <input type="checkbox" id="days-007" />
                              <label for="days-007">
                                <span className="product-span">
                                  Above 5 Weeks
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <Link to="#">View More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <ProductList
                    banner="/images/leg-index-slide.jpg"
                    pageCategory={match.params.categoryId}
                    pageHeading={match.params.categoryName}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ApplicationTemplate>
    );
  }
}

export default ShopByCategory;
