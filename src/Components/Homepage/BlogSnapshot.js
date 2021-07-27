import React from "react";

function BlogSnapshot() {
  return (
    <div className="suti-blog-section">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <div className="blog-panel-image">
            <div className="bx-blog-portfolio">
              <img src="images/blog-image-001.jpg" />
            </div>
            <div className="bx-blog-portfolio">
              <img src="images/blog-image-002.jpg" />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="blog-listing-section">
            <h3>Suti Blog</h3>

            <div className="blog-popup-list clearfix">
              <a href="#">
                <div className="blog-popup-list-image">
                  <img src="images/blog-img-001.jpg" />
                </div>
                <div className="blog-popup-list-content">
                  <div className="title">What Type Of Bride Are You?</div>
                  <p>
                    In publishing and graphic design, demonstrate the visual
                    form of a document{" "}
                    <span className="red-more">Read More</span>
                  </p>
                </div>
              </a>
            </div>

            <div className="blog-popup-list clearfix">
              <a href="#">
                <div className="blog-popup-list-image">
                  <img src="images/blog-img-002.jpg" />
                </div>
                <div className="blog-popup-list-content">
                  <div className="title">What Type Of Bride Are You?</div>
                  <p>
                    In publishing and graphic design, demonstrate the visual
                    form of a document{" "}
                    <span className="red-more">Read More</span>
                  </p>
                </div>
              </a>
            </div>

            <div className="blog-popup-list clearfix">
              <a href="#">
                <div className="blog-popup-list-image">
                  <img src="images/blog-img-003.jpg" />
                </div>
                <div className="blog-popup-list-content">
                  <div className="title">What Type Of Bride Are You?</div>
                  <p>
                    In publishing and graphic design, demonstrate the visual
                    form of a document{" "}
                    <span className="red-more">Read More</span>
                  </p>
                </div>
              </a>
            </div>

            <a href="#" className="web-primary-btn">
              View All Blog Post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSnapshot;
