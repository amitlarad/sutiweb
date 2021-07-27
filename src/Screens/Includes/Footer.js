import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="footer-panel">
                <div className="footer-title">about us</div>
                <ul>
                  <li>
                    <Link to="#">PURPLE STYLE LAB</Link>
                  </li>
                  <li>
                    <Link to="#">PURPLE STYLE LAB</Link>
                  </li>
                  <li>
                    <Link to="#">STUDIO LOCATOR</Link>
                  </li>
                  <li>
                    <Link to="#">SUTI BLOG</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer-panel">
                <div className="footer-title">quick links</div>
                <ul>
                  <li>
                    <Link to="#">BESTSELLERS</Link>
                  </li>
                  <li>
                    <Link to="#">EXCLUSIVE</Link>
                  </li>
                  <li>
                    <Link to="#">SALE</Link>
                  </li>
                  <li>
                    <Link to="#">GIFT CARDS</Link>
                  </li>
                  <li>
                    <Link to="#">CELEBRITY CLOSET</Link>
                  </li>
                  <li>
                    <Link to="#">PERSONAL STYLING</Link>
                  </li>
                  <li>
                    <Link to="#">OCCASIONS</Link>
                  </li>
                  <li>
                    <Link to="#">CLIENT DIARIES</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer-panel">
                <div className="footer-title">customer care</div>
                <ul>
                  <li>
                    <Link to="#">SHIPPING INFORMATION</Link>
                  </li>
                  <li>
                    <Link to="#">RETURNS & EXCHANGE</Link>
                  </li>
                  <li>
                    <Link to="#">TERMS & CONDITIONS</Link>
                  </li>
                  <li>
                    <Link to="#">PRIVACY & COOKIE POLICIES</Link>
                  </li>
                  <li>
                    <Link to="#">FAQS</Link>
                  </li>
                  <li>
                    <Link to="#">SITE MAP</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="footer-panel">
                <div className="footer-title">contact us</div>
                <div className="footer-call-panel">
                  <span className="footer-call">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <span className="footer-call-content">
                    <Link to="tel:919660500444">+91-9660500444</Link>
                  </span>
                </div>

                <div className="footer-call-panel">
                  <span className="footer-call">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  <span className="footer-call-content">
                    <Link to="mailto:cc@sutionline.com">cc@sutionline.com</Link>
                  </span>
                </div>

                <div className="footer-call-panel">
                  <span className="footer-call">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  </span>
                  <span className="footer-call-content">
                    <Link to="tel:919660500444">+91-9660500444</Link>
                  </span>
                </div>

                <div className="footer-title">follow us</div>

                <div className="socail-touch-anchor">
                  <Link to="#">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-support-option">
            <div className="flex-customer-support-option text-center">
              <div className="csd-panel">
                <div className="icon-center">
                  <img
                    src="/images/suti-24-hour-customer-support.svg"
                    align="suti-24-hour-customer-support"
                    alt=""
                  />
                </div>
                <div className="title-ellipsis-center">24X7 CUSTOMER SUPPORT</div>
              </div>

              <div className="csd-panel">
                <div className="icon-center">
                  <img src="/images/top-designers.svg" align="top-designers" alt="" />
                </div>
                <div className="title-ellipsis-center">500+ DESIGNERS</div>
              </div>

              <div className="csd-panel">
                <div className="icon-center">
                  <img
                    src="/images/suti-free-international-shipping.svg"
                    align="suti-free-international-shipping"
                    alt=""
                  />
                </div>
                <div className="title-ellipsis-center">
                  FREE INTERNATIONAL SHIPPING*
                </div>
              </div>
            </div>
          </div>

          <div className="payment-newsletter-section">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="payment-gateway-panel">
                  <h4>COMPLETELY SAFE AND SECURE PAYMENT METHOD</h4>
                  <p>
                    We accept Netbanking, all major credit cards. We also accept
                    orders with cash payment
                  </p>
                  <div className="payment-way-icons">
                    <img src="/images/payment-icons-way.jpg" alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="sign-up-newsletter">
                  <h4>
                    Sign up to get exclusive style tips, new arrival updates and
                    a special discount code.
                  </h4>
                  <div className="email-signup">
                    <input
                      type="text"
                      placeholder="Here's my Email"
                      className="form-control"
                      name=""
                    />
                    <button className="sign-up-btn">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="bottom-footer">
        <div className="container">
          <h4>shop online at suti</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>TOP INDIAN DESIGNERS ARE JUST A CLICK AWAY</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>CUSTOMER FRIENDLY SERVICES AND CONVENIENT SHOPPING</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>ACCESS TO MUST HAVE TRENDS AND OCCASION WEAR</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>BEST PRICE AND ADDED BENEFITS</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>SHOP HOME DECOR ON SUTI SHOP</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>READ SUTI BLOG</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>Top Designers for Clothing</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>Top designers for Accessories</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>Top Categories in Clothing</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>Top Categories in Jewellery and Accessories</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>

          <h4>Designer wear for all your special occasions:</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>

          <h4>We Ship Across the World</h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
      </section>
      <div
        id="search-product-categories"
        className="modal fade search-product-popup"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <span className="cross-svg">
                    <img src="/images/cross.svg" alt=""/>
                  </span>
                </button>
                <div className="product-search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input
                    type="text"
                    placeholder="Search for products, designers and categories"
                    name=""
                  />
                </div>
              </div>

              <div className="popular-categories text-left">
                <div className="flex-popular-categories">
                  <div className="flex-popular-categories-panel">
                    <h4>Popular Categories</h4>
                    <ul>
                      <li>
                        <Link to="#">Kurtas</Link>
                      </li>
                      <li>
                        <Link to="#">Anarkalis</Link>
                      </li>
                      <li>
                        <Link to="#">Lehengas</Link>
                      </li>
                      <li>
                        <Link to="#">Sarees</Link>
                      </li>
                      <li>
                        <Link to="#">Gowns</Link>
                      </li>
                      <li>
                        <Link to="#">Dresses</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-popular-categories-panel">
                    <h4>Popular Designers</h4>
                    <ul>
                      <li>
                        <Link to="#">Masaba</Link>
                      </li>
                      <li>
                        <Link to="#">Vvani by Vani Vats</Link>
                      </li>
                      <li>
                        <Link to="#">Priyanka Jain</Link>
                      </li>
                      <li>
                        <Link to="#">Ridhi Mehra</Link>
                      </li>
                      <li>
                        <Link to="#">Chhavvi Aggarwal</Link>
                      </li>
                      <li>
                        <Link to="#">Surendri by Yogesh Chaudhary</Link>
                      </li>
                      <li>
                        <Link to="#">Gopi Vaid</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-popular-categories-panel">
                    <h4>Popular Searches</h4>
                    <ul>
                      <li>
                        <Link to="#">Sabyasachi</Link>
                      </li>
                      <li>
                        <Link to="#">Bridal Lehengas</Link>
                      </li>
                      <li>
                        <Link to="#">Sharara</Link>
                      </li>
                      <li>
                        <Link to="#">Anita Dongre</Link>
                      </li>
                      <li>
                        <Link to="#">Ritu Kumar</Link>
                      </li>
                      <li>
                        <Link to="#">Jump Suits</Link>
                      </li>
                      <li>
                        <Link to="#">Drape Saree</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex-popular-categories-panel">
                    <h4>What's New!</h4>
                    <ul>
                      <li>
                        <Link to="#">The Right Cut</Link>
                      </li>
                      <li>
                        <Link to="#">Urvi Shah</Link>
                      </li>
                      <li>
                        <Link to="#">Anushree Reddy</Link>
                      </li>
                      <li>
                        <Link to="#">Prathyusha Garimella Men</Link>
                      </li>
                      <li>
                        <Link to="#">Rupali kalita</Link>
                      </li>
                      <li>
                        <Link to="#">Peora</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="search-product-scroll-bar">
                <div className="products-sp-bar-section">
                  <div className="layout-heading justify-space-between align-center text-left">
                    <h2>Trending Products</h2>
                  </div>
                  <div className="product-layout-section custom-grid-product-layout-section scroll-custom-grid-product-layout-section">
                    <div className="row">
                      <div className="col-md-3 col-sm-3">
                        <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                          <div className="prel-gutter">
                            <Link to="#">
                              <div className="dynamic-img-container">
                                <img src="/images/must-have-001.jpg" alt=""/>
                              </div>
                              <div className="group-title-panel">
                                <div className="title-ellipsis">Kshitij Jalori</div>
                                <p>Ivory Digital Printed Kurta Set</p>
                                <div className="product-price">₹ 22,900</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3">
                        <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                          <div className="prel-gutter">
                            <Link to="#">
                              <div className="dynamic-img-container">
                                <img src="/images/must-have-002.jpg" alt=""/>
                              </div>
                              <div className="group-title-panel">
                                <div className="title-ellipsis">Kshitij Jalori</div>
                                <p>Ivory Digital Printed Kurta Set</p>
                                <div className="product-price">₹ 22,900</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3">
                        <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                          <div className="prel-gutter">
                            <Link to="#">
                              <div className="dynamic-img-container">
                                <img src="/images/must-have-003.jpg" alt=""/>
                              </div>
                              <div className="group-title-panel">
                                <div className="title-ellipsis">Kshitij Jalori</div>
                                <p>Ivory Digital Printed Kurta Set</p>
                                <div className="product-price">₹ 22,900</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3">
                        <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                          <div className="prel-gutter">
                            <Link to="#">
                              <div className="dynamic-img-container">
                                <img src="/images/must-have-004.jpg" alt=""/>
                              </div>
                              <div className="group-title-panel">
                                <div className="title-ellipsis">Kshitij Jalori</div>
                                <p>Ivory Digital Printed Kurta Set</p>
                                <div className="product-price">₹ 22,900</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 col-sm-3">
                        <div className="placeholder-image-portfolio-panel placeholder-image-portfolio-panel-layout">
                          <div className="prel-gutter">
                            <Link to="#">
                              <div className="dynamic-img-container">
                                <img src="/images/must-have-005.jpg" alt=""/>
                              </div>
                              <div className="group-title-panel">
                                <div className="title-ellipsis">Kshitij Jalori</div>
                                <p>Ivory Digital Printed Kurta Set</p>
                                <div className="product-price">₹ 22,900</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="login-site" className="modal fade login-site" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span className="cross-svg">
                  <img src="/images/cross.svg" alt=""/>
                </span>
              </button>
            </div>

            <div className="layout-login-register">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="login-register-panel text-left">
                    <h4>User Login</h4>
                    <div className="small-title">For Existing Customers</div>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          name=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          name=""
                        />
                      </div>
                      <Link to="#" className="frgt-password">
                        Forgot your password?
                      </Link>
                      <button>login</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="login-social-fb-google text-left">
                    <div className="title-social">
                      Log in from Google or Facebook
                    </div>
                    <div className="social-btn-login">
                      <Link to="#">
                        <img
                          src="/images/googleplus-btn.jpg"
                          alt="googleplus-btn"
                        />
                      </Link>
                      <Link to="#">
                        <img src="/images/fb-btn.jpg" alt="fb-btn" />
                      </Link>
                    </div>
                    <div className="account-panel">
                      <span className="have-account-span">
                        Don’t have an account?
                      </span>{" "}
                      <Link to="#">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
