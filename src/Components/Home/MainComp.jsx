import React, { useEffect } from "react";
import "./maincomp.css";
import Banner from "./Banner";
import Slide from "./Slide";
import { getProducts } from "../redux/Actions/Action";
import { useDispatch, useSelector } from "react-redux";

const MainComp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal of the Day" products={products} />
        </div>
        <div className="right_slide">
          <h4>Great Freedom Sale</h4>
          <img src="./great.jpg" alt="sideImage" />
          <a href="/">See More</a>
        </div>
      </div>
      <Slide title="Today's Deal" products={products}/>
      <div className="center_img">
        <img src="./sixer.jpg" alt="centerImage" />
      </div>
      <Slide title="Upto 80% off" products={products}/>
      <Slide title="Best Seller" products={products}/>
    </div>
  );
};

export default MainComp;
