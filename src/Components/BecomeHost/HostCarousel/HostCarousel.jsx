import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import snap1 from "../Pictures/snap1.png";
import slide1 from "../Pictures/slide1.png";
import slide2 from "../Pictures/slide2.png";
import slide3 from "../Pictures/slide3.png";
import slide4 from "../Pictures/slide4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
const HostCarousel = () => {
  const history = useHistory();
  return (
    <div className="mainCont">
      <div>
        <img src={snap1} alt="snap1" />
      </div>
      <div className="carouselStyle">
        <Carousel showThumbs={false} width="100%" infiniteLoop="true" autoPlay>
          <div>
            <img alt="" src={slide1} />
          </div>
          <div>
            <img alt="" src={slide2} />
          </div>
          <div>
            <img alt="" src={slide3} />
          </div>
          <div>
            <img alt="" src={slide4} />
          </div>
        </Carousel>
      </div>
      <div className="cont">
        <div className="banner2">
          <div className="banner__info2">
            <h2>CHECK IT OUT FOR YOURSELF</h2>
            <span>Host your entire place<br/> for 4 Guests<br/> in Lucknow <br/>and earn up to ₹4,530 a month*</span><br/>
            <Button onClick={() => history.push()} variant="outlined">
              Get Inspired
            </Button><p>How we estimate your earnings potential</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostCarousel;
