import React from "react";
import FeaturedCategories from "../Components/Homepage/FeaturedCategories";
import FeaturedProducts from "../Components/Homepage/FeaturedProducts";
import FeaturedProductsBig from "../Components/Homepage/FeaturedProductsBig";
import HomeSecondarySlide from "../Components/Homepage/HomeSecondarySlide";
import MovingSlider from "../Components/Homepage/MovingSlider";
import ShopByCategory from "../Components/Homepage/ShopByCategory";
import Slides from "../Components/Homepage/Slides";
import ApplicationTemplate from "./Layouts/ApplicationTemplate";

function Home() {
  return (
    <ApplicationTemplate>
      <MovingSlider />
      <HomeSecondarySlide />
      {/* COLLECTIONS */}
      <Slides
        slides={[
          {
            id: 1,
            image: "images/banners_cat_placeholder-001.jpg",
            heading: "Kurtis Collections",
            link: "/",
          },
          {
            id: 2,
            image: "images/banners_cat_placeholder-002.jpg",
            heading: "Dress Collections",
            link: "/",
          },
          {
            id: 3,
            image: "images/banners_cat_placeholder-003.jpg",
            heading: "Top and Tunics Collections",
            link: "/",
          },
        ]}
      />
      {/* COLLECTIONS  */}
      <section className="home-index-product-collections">
        <div className="container-fluid">
          {/* FEATURED CATEGORIES  */}
          <FeaturedCategories
            heading="Monsoon Collections"
            vertical={false}
            categories={[
              {
                id: 1,
                image: "images/m-img-001.jpg",
                heading: "Party wear Collection",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 2,
                image: "images/m-img-002.jpg",
                heading: "Casual wear Collection",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 3,
                image: "images/m-img-003.jpg",
                heading: "Formal wear Collection",
                link: "/",
                subheading: "Shop Now",
              },
            ]}
          />
          <FeaturedCategories
            heading="Designer On Discount"
            vertical={true}
            categories={[
              {
                id: 1,
                image: "images/porttex-img-001.jpg",
                heading: "Up to 20% off",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 2,
                image: "images/porttex-img-002.jpg",
                heading: "Up to 30% off",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 3,
                image: "images/porttex-img-003.jpg",
                heading: "Up to 40% off",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 4,
                image: "images/porttex-img-004.jpg",
                heading: "Up to 50% off",
                link: "/",
                subheading: "Shop Now",
              },
            ]}
          />
          <FeaturedCategories
            heading="Sarees -> The Wardrobe Icon"
            vertical={true}
            categories={[
              {
                id: 1,
                image: "images/porttex-img-005.jpg",
                heading: "Designer Saree WD",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 2,
                image: "images/porttex-img-006.jpg",
                heading: "Corporate Sarees",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 3,
                image: "images/porttex-img-007.jpg",
                heading: "Festival Sarees",
                link: "/",
                subheading: "Shop Now",
              },
              {
                id: 4,
                image: "images/porttex-img-008.jpg",
                heading: "Party Wear Sarees",
                link: "/",
                subheading: "Shop Now",
              },
            ]}
          />
          {/* FEATURED CATEGORIES  */}
          {/* FEATURED PRODUCTS  */}
          <FeaturedProductsBig
            heading="New Arrivals"
            bigPic={true}
            products={[
              {
                id: 1,
                image: "images/celebrity-img-001.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 2,
                image: "images/celebrity-img-002.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 3,
                image: "images/celebrity-img-003.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 4,
                image: "images/celebrity-img-004.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
            ]}
          />
          {/* FEATURED PRODUCTS  */}
          <FeaturedProducts
            heading="Trending Products"
            bigPic={false}
            products={[
              {
                id: 1,
                image: "images/must-have-001.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 2,
                image: "images/must-have-002.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 3,
                image: "images/must-have-003.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 4,
                image: "images/must-have-004.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
              {
                id: 5,
                image: "images/must-have-005.jpg",
                heading: "Kshitij Jalori",
                link: "/",
                subheading: "Ivory Digital Printed Kurta Set",
                price: "₹ 2999",
              },
            ]}
          />
          {/* FEATURED PRODUCTS  */}

          {/* Masonry will be here */}
          {/* Shop By Category */}
          <ShopByCategory
            heading="Shop By Category"
            items={[
              {
                id: 1,
                link: "/",
                heading: "Kurtis",
                subheading: "Shop Kurtis Online",
                image: "images/shcate-img-001.jpg",
              },
              {
                id: 2,
                link: "/",
                heading: "Dresses",
                subheading: "Shop Dresses Online",
                image: "images/shcate-img-002.jpg",
              },
              {
                id: 3,
                link: "/",
                heading: "Tops and Tunics",
                subheading: "Shop Tops and Tunics Online",
                image: "images/shcate-img-003.jpg",
              },
              {
                id: 4,
                link: "/",
                heading: "Bottoms",
                subheading: "Shop Bottoms Online",
                image: "images/shcate-img-004.jpg",
              },
            ]}
          />
          {/* Shop By Category */}

        </div>
      </section>
      {/*  */}
    </ApplicationTemplate>
  );
}

export default Home;
