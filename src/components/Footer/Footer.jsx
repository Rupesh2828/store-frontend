import "./Footer.scss";
import React from "react";
import { faLocationArrow, FaMobileAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            hic est excepturi omnis soluta harum alias obcaecati laudantium
            laboriosam! Ut sint labore ea earum obcaecati!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow/>
            <div className="text">
                Shivaji Maharaj Chauk, Kalyan , 421503
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt/>
            <div className="text">
                Phone : 0451 157 4564
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope/>
            <div className="text">
                Email : text@gmail.com
            </div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
            <div className="text">Headphones</div>
            <div className="text">Laptops</div>
            <div className="text">Watches</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Projectors</div>
            <div className="text">Mobiles</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Return</div>
            <div className="text">Terms and Condition</div>
            <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                CREATED BY RUPESH JADHAV.
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
