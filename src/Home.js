import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home_row">
        {/* Product id, title, price, rating,  image*/}
        <Product
          id="1"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />

        <Product
          id="2"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />
      </div>
      <div className="home_row">
        {/* Product id, title, price, rating,  image*/}
        <Product
          id="3"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />

        <Product
          id="4"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />
        <Product
          id="5"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="6"
          title="AmazonBasics Elite 750W Mixer Grinder with 3 Stainless Steel Jar + 1 Juicer Jar"
          price="2699.00"
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/71h41mOnzQL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
