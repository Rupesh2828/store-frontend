import "./SingleProduct.scss";
import { useState, useContext } from "react";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const {id} = useParams();
  const {handleAddToCart} = useContext(Context);
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  const increment = () =>{
    setQuantity((preState) => preState+1)
  }
  const decrement = () =>{
    setQuantity((preState) => {
      if(preState ===1) return 1;
      return preState - 1;
    })
  }

  if(!data) return;  //this is for avoiding optional chaining
  const prod = data.data[0].attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">

          <div className="left">
            <img src={process.env.REACT_APP_API_URL + prod?.img?.data[0]?.attributes?.url} alt="" />
          </div>

          <div className="right">
            <span className="name">{prod.title}</span>
            <span className="price">&#8377;{prod.price}</span>
            <span className="desc">{prod.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">

                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>

              <button className="add-to-cart-button" onClick={()=> {
                handleAddToCart(data.data[0], quantity);
                setQuantity(1);
              }}>
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category :{" "}
                <span>{prod?.categories?.data[0]?.attributes?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                    <FaFacebookF size={16}/>
                    <FaTwitter size={16}/>
                    <FaInstagram size={16}/>
                    <FaPinterest size={16}/>
                    <FaFacebookF size={16}/>
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={prod.categories.data[0].id}/>
      </div>
    </div>
  );
};

export default SingleProduct;
