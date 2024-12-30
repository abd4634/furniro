import React from "react";
import product from "../assets/img/Images1.png";
import Respira from "../assets/img/respira.jpeg";
import BigSofa from "../assets/img/luxury-big-sofa.png";
import Levious from "../assets/img/Levious.png";
import PottySofa from "../assets/img/pottysofa.jpeg";
import Pingky from "../assets/img/pingky.jpeg";
import Muggo from "../assets/img/muggo.png";
import Grifo from "../assets/img/Grifo.png";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import {Link} from 'react-router-dom';

const ProductCard = ({ image, category, title, price }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        
      <div className="product-card" style={{ backgroundColor: "#F4F5F7" }}>
      <div
        className="offer-label"
        style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: '#E97171',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      20% OFF
    </div>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <button className="add-to-cart">Add to Cart</button>
        <div className="product-actions">
          <button title="Share">
           <AiOutlineShareAlt />Share
          </button>
          <button title="Compare">
            <MdCompareArrows/>Compare
          </button>
          <button title="Like">
            <CiHeart />Like
          </button>
        </div>
        <div className="mt-4" style={{ padding: "10px", marginTop: "-10px" }}>
          <h3
            className="text-gray-500 text-xs tracking-widest title-font mb-1"
            style={{ color: "#3A3A3A", fontSize: "18px", fontWeight: "800" }}
          >
            {title}
          </h3>
          <h2
            className="text-gray-900 title-font text-lg font-medium"
            style={{ color: "#3A3A3A", fontWeight: "400" }}
          >
            {category}
            
          </h2>
          <p className="mt-1">{price}</p>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      image: product,
      category: "Syltherine",
      title: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
      image: Levious,
      category: "Leviosa",
      title: "Stylish cafe chair",
      price: "Rp 2.500.000",
    },
    {
        image: BigSofa,
        category: "Lolita",
        title: "Luxury Big Sofa",
        price: "Rp 7.000.000",
      },
      {
        image: Respira,
        category: "Respira",
        title: "Outdoor bar table and stool",
        price: "Rp 500.000",
      },
      {
        image: Grifo,
        category: "Grifo",
        title: "Night lamp",
        price: "Rp 1.500.000",
      },
      {
        image: Muggo,
        category: "Muggo",
        title: "Small Mug",
        price: "Rp 150.000",
      },
      {
        image: Pingky,
        category: "CATEGORY",
        title: "The Catalyzer",
        price: "$16.00",
      },
      {
        image: PottySofa,
        category: "CATEGORY",
        title: "The Catalyzer",
        price: "$16.000",
      },
    // Add more products as needed
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-7 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <h1 className="font-bold text-black text-2xl md:text-4xl leading-[48px] mb-6" style={{ marginTop: "-25px" }}>Our Product</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <div className="flex justify-center">
        <Link 
          to="/shops" 
          className="w-full md:w-[180px] h-[60px] md:h-[50px] bg-[#ffffff] text-[#a77d1f] py-2 px-6 focus:outline-none hover:bg-[#a77d1f] hover:text-white border border-[#a77d1f] text-lg mt-4 text-center"
          style={{ width: "220px" }}
        >
          Show More
        </Link>

            </div>
      </div>
      
    </section>
  );
};

export default ProductList;
