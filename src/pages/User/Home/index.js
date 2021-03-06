/** @format */

import React, { useEffect } from "react";
import { Col, Row, Tabs } from "antd";
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import Slide from "./Slide";
import { getProductHome, getCategory } from "../../../redux/actions/index";
import { FaTruck, FaRupeeSign } from "react-icons/fa";
import { FiRefreshCw, FiHeadphones } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import "./style.scss";

const { TabPane } = Tabs;
const awards = [
  {
    imgUrl:
      "https://images.pexels.com/photos/2059153/pexels-photo-2059153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Taco salad",
    subtitle: "Lorem ipsum dolor ",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Steak Sandwich",
    subtitle: "Lorem ipsum dolor ",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1470338950318-40320a722782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",

    title: "Chicken satay salad",
    subtitle: "Lorem ipsum dolor ",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",

    title: "Bell pepper egg cups",
    subtitle: "Lorem ipsum dolor ",
  },
];
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="banner__laurels_awards_card">
    <img src={imgUrl} alt="awards" />
    <div className="banner__laurels_awards_card_content">
      <p className="banner__cormorant" style={{ color: "#7fad39" }}>
        {title}
      </p>
      <p className="banner__opensans">{subtitle}</p>
    </div>
  </div>
);
function Home({ getProductHome, productHome, getCategory, categoryData }) {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = "Oganic | Trang Ch???";
    getProductHome();
    getCategory();
  }, [getCategory, getProductHome]);

  return (
    <>
      <div className="home">
        <div className="container">
          <section className="home__slide">
            <Row>
              <Col md={24} sm={24}>
                <Slide data={dataSlide} type="slideShow"></Slide>
              </Col>
            </Row>
          </section>
          <section className="home__banner">
            <Row gutter={24}>
              <Col md={10} sm={24}>
                <div className="banner__item">
                  <a href="/" className="banner__img">
                    <img
                      src="https://images.pexels.com/photos/5282727/pexels-photo-5282727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="banner"
                    ></img>
                  </a>
                  <div className="banner__content ">
                    <h3 className="banner__title banner__title--white">
                      Call For Reservations <br />
                      Opening Hours
                    </h3>
                    <div className="banner__open">
                      <h4>
                        Sunday to Tuesday <br />
                        09:00 - 22:00
                      </h4>

                      <h4>
                        Friday to Saturday <br />
                        11:00 - 19:00
                      </h4>
                    </div>
                    <a href="/booking">
                      <button className="button button-round button-primary">
                        {t("Book_Table.reserver")}
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={14} sm={24}>
                <div className="banner__item">
                  <a href="/" className="banner__img">
                    <img
                      src="https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="banner"
                    ></img>
                  </a>
                  <div className="banner__content">
                    <h3 className="banner__title ">
					Enjoy Restaurant HealthyFood <br />
                      {t("home.banner.100% Fresh food")}
                    </h3>
                    <div className="banner__laurels_awards">
                      {awards.map((award) => (
                        <AwardCard award={award} key={award.title} />
                      ))}
                    </div>
                    <a href="/shop">
                      <button className="button button-round button-primary">
                        View more
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="home__banner">
            <Row gutter={24}>
              <Col md={12} sm={24}>
                <div className="banner__item">
                  <a href="/" className="banner__img">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/banner1.jpg?v=1593258151"
                      alt="banner"
                    ></img>
                  </a>
                  <div className="banner__content ">
                    <h3 className="banner__title banner__title--white">
                      {t("home.banner.fresh fruit vegetable")} <br />
                      {t("home.banner.on our product")}
                    </h3>
                    <a href="/shop">
                      <button className="button button-round button-primary">
                        {t("home.banner.shop now")}
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} sm={24}>
                <div className="banner__item">
                  <a href="/" className="banner__img">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/banner2-min.jpg?v=1593256886"
                      alt="banner"
                    ></img>
                  </a>
                  <div className="banner__content">
                    <h3 className="banner__title ">
                      {t("home.banner.Vegetable Eggplant")} <br />
                      {t("home.banner.100% Fresh food")}
                    </h3>
                    <a href="/shop">
                      <button className="button button-round button-primary">
                        {t("home.banner.shop now")}
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          <section className="home__category">
            <div className="container category__container section-title">
              <h2 className="category__title">{t("home.category.title")}</h2>
              <div className="category__slide">
                <Slide
                  data={categoryData}
                  type="category"
                  xl={6}
                  lg={5}
                  md={4}
                  sm={3}
                  xs={2}
                ></Slide>
              </div>
            </div>
          </section>

          <section className="home__product">
            <div className="container product__container">
              <Tabs defaultActiveKey="1">
                <TabPane
                  tab={
                    <button className="button button-round button-transparent">
                      {t("home.product.Special Product")}
                    </button>
                  }
                  key="1"
                >
                  <Slide
                    data={productHome.special}
                    type="product"
                    xl={4}
                    lg={4}
                    md={3}
                    sm={2}
                    xs={2}
                  ></Slide>
                </TabPane>
                <TabPane
                  tab={
                    <button className="button button-round button-transparent">
                      {t("home.product.New Product")}
                    </button>
                  }
                  key="2"
                >
                  <Slide
                    data={productHome.new}
                    type="product"
                    xl={4}
                    lg={4}
                    md={3}
                    sm={2}
                    xs={2}
                  ></Slide>
                </TabPane>
                <TabPane
                  tab={
                    <button className="button button-round button-transparent">
                      {t("home.product.Bestseller")}
                    </button>
                  }
                  key="3"
                >
                  <Slide
                    data={productHome.sale}
                    type="product"
                    xl={4}
                    lg={4}
                    md={3}
                    sm={2}
                    xs={2}
                  ></Slide>
                </TabPane>
              </Tabs>
            </div>
          </section>

          <section className="home__countdown">
            <div
              className="countdown__container"
              style={{
                backgroundImage:
                  "url('https://cdn.shopify.com/s/files/1/0412/8151/9765/files/dealbanner-min.jpg?v=1593257102')",
              }}
            >
              <div className="countdown__content">
                <p className="countdown__title--sub">
                  {t("home.countdown.thumbnail")}
                </p>
                <h2 className="countdown__title--main">
                  {t("home.countdown.title")}
                </h2>
                <div className="countdown__deal">
                  <ul className="countdown__deal--list">
                    <li className="countdown__deal--item">
                      <span className="countdown__deal--number">104</span>
                      <span className="countdown__deal--text">
                        {t("home.countdown.day")}
                      </span>
                    </li>
                    <li className="countdown__deal--item">
                      <span className="countdown__deal--number">6</span>
                      <span className="countdown__deal--text">
                        {t("home.countdown.hrs")}
                      </span>
                    </li>
                    <li className="countdown__deal--item">
                      <span className="countdown__deal--number">8</span>
                      <span className="countdown__deal--text">
                        {t("home.countdown.min")}
                      </span>
                    </li>
                    <li className="countdown__deal--item">
                      <span className="countdown__deal--number">12</span>
                      <span className="countdown__deal--text">
                        {t("home.countdown.sec")}
                      </span>
                    </li>
                  </ul>
                </div>
                <button className="button button-round--lg button-primary ">
                  {t("home.countdown.shop collection")}
                </button>
              </div>
            </div>
          </section>

          <section className="home-blog spad">
            <Row gutter={24}>
              <Col md={24} sm={24}>
                <div className="section-title home-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col md={8} sm={24}>
                <div className="blog__item">
                  <div className="blog__item-pic">
                    <img
                      src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      alt="blog"
                    />
                  </div>
                  <div className="blog__item-text">
                    <ul>
                      <li>
                        <CalendarOutlined /> Aug ,2021
                      </li>
                      <li>
                        <CommentOutlined /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/">Cooking tips make cooking simple</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={8} sm={24}>
                <div className="blog__item">
                  <div className="blog__item-pic">
                    <img
                      src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                      alt="blog"
                    />
                  </div>
                  <div className="blog__item-text">
                    <ul>
                      <li>
                        <CalendarOutlined /> Aug ,2021
                      </li>
                      <li>
                        <CommentOutlined /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/">6 ways to prepare breakfast for 30</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={8} sm={24}>
                <div className="blog__item">
                  <div className="blog__item-pic">
                    <img
                      src="https://images.unsplash.com/photo-1532509774891-141d37f25ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="blog"
                    />
                  </div>
                  <div className="blog__item-text">
                    <ul>
                      <li>
                        <CalendarOutlined /> Aug ,2021
                      </li>
                      <li>
                        <CommentOutlined /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="/">Visit the clean farm in the US</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          <div className="service">
            <div className="home__service">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                  <div className="home__service--item">
                    <div className="service__item--icon">
                      <div>
                        <FaTruck />
                      </div>
                    </div>
                    <span className="service__item--title">
                      {t("Free delivery")}
                    </span>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                  <div className="home__service--item">
                    <div className="service__item--icon">
                      <div>
                        <FaRupeeSign />
                      </div>
                    </div>
                    <span className="service__item--title">
                      {t("Cash On Delivery")}
                    </span>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                  <div className="home__service--item">
                    <div className="service__item--icon">
                      <div>
                        <FiRefreshCw />
                      </div>
                    </div>
                    <span className="service__item--title">
                      {t("30 Days Returns")}
                    </span>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6}>
                  <div className="home__service--item">
                    <div className="service__item--icon">
                      <div>
                        <FiHeadphones />
                      </div>
                    </div>
                    <span className="service__item--title">
                      {t("Online Support")}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose="2500" />
    </>
  );
}

const dataSlide = [
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider1-min.jpg?v=1593257108",
    title: ["Fresh Fruits ", " & vegetable"],
    thumbnail: "Summer Vege sale",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider2.jpg?v=1593431537",
    title: ["Prod Of Indian  ", "100% Pacaging"],
    thumbnail: "Organic Indian Masala",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider3-min.jpg?v=1593257113",
    title: ["Fresh for your", " heath"],
    thumbnail: "Top Selling!",
  },
];

const mapStateToProps = (state) => {
  const { productHome } = state.productReducer;
  const { categoryData } = state.categoryReducer;

  return {
    productHome,
    categoryData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProductHome: (params) => dispatch(getProductHome(params)),
    getCategory: (params) => dispatch(getCategory(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
