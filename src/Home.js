import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
            alt=""
            />

            {/* Prodcut id, title, price, rating, image */}
            <div className="home__row">
                <Product
                id="12121"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={11.9}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/61quqj7dPPL._AC_SL1000_.jpg"
                />
                <Product
                id="41"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={24.9}
                rating={5}
                image="https://m.media-amazon.com/images/I/81ufrbnPx-L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="56"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={119.9}
                rating={6}
                image="https://m.media-amazon.com/images/I/41+CXFgQwjL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="41"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={24.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81i8c1fSkyL._AC_SL1500_.jpg"
                />
                <Product
                id="41"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={24.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61NZPCYSeVL._AC_SL1301_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product
                id="85"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={87.9}
                rating={4}
                image="https://m.media-amazon.com/images/I/91dwoBmSshL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="74"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={52.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product
                id="75"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={86.9}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/31tjqEV7OHL._AC_US327_FMwebp_QL65_.jpg"
                />
                <Product
                id="56"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={119.9}
                rating={6}
                image="https://m.media-amazon.com/images/I/41+CXFgQwjL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="56"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={119.9}
                rating={6}
                image="https://m.media-amazon.com/images/I/41+CXFgQwjL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="75"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={86.9}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/31tjqEV7OHL._AC_US327_FMwebp_QL65_.jpg"
                />
                <Product
                id="74"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={52.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id="56"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={119.9}
                rating={6}
                image="https://m.media-amazon.com/images/I/41+CXFgQwjL._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="74"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={52.9}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                />
                <Product
                id="41"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={24.9}
                rating={5}
                image="https://m.media-amazon.com/images/I/81ufrbnPx-L._AC_UY327_FMwebp_QL65_.jpg"
                />
                <Product
                id="12121"
                title=" The lean Startup: How Innovation started creates radically successful Business Paperback"
                price={11.9}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51ySbrzDyiL._AC_US240_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
