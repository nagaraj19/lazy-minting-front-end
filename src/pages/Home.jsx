import React, { useState } from "react";

// import homeBgImage from "../images/creatorbackground-3.jpeg";
import homeNftImage from "../../images/nft-image-1.png";
import NftCard from "../components/NftCard";
import Button from "../components/Button";

// Dummy Nft Imports
import firstNft from "../../images/nft-image-1.png";
import secondNft from "../../images/nft-image-2.png";
import thirdNft from "../../images/nft-image-3.png";

const Nfts = [
  {
    image: firstNft,
    name: "Swagger",
    description: "I am Swagger",
    price: "76.25 ETH",
  },
  {
    image: secondNft,
    name: "Wrangler",
    description: "I am Wrangler",
    price: "1.11 ETH",
  },
  {
    image: thirdNft,
    name: "John Doe",
    description: "I am John Doe",
    price: "6.50 ETH",
  },
  {
    image: firstNft,
    name: "Swagger",
    description: "I am Swagger",
    price: "76.25 ETH",
  },
  {
    image: secondNft,
    name: "Wrangler",
    description: "I am Wrangler",
    price: "1.11 ETH",
  },
  {
    image: thirdNft,
    name: "John Doe",
    description: "I am John Doe",
    price: "6.50 ETH",
  },
  {
    image: firstNft,
    name: "Swagger",
    description: "I am Swagger",
    price: "76.25 ETH",
  },
  {
    image: secondNft,
    name: "Wrangler",
    description: "I am Wrangler",
    price: "1.11 ETH",
  },
  {
    image: thirdNft,
    name: "John Doe",
    description: "I am John Doe",
    price: "6.50 ETH",
  },
  {
    image: firstNft,
    name: "Swagger",
    description: "I am Swagger",
    price: "76.25 ETH",
  },
  {
    image: secondNft,
    name: "Wrangler",
    description: "I am Wrangler",
    price: "1.11 ETH",
  },
  {
    image: thirdNft,
    name: "John Doe",
    description: "I am John Doe",
    price: "6.50 ETH",
  },
];

const Home = () => {
  const dummyFunction = () => {
    console.log("Dummy function Home.jsx");
  };

  const dummyNfts = [];

  return (
    <div>
      <div
        className=" w-screen h-[100vh] object-contain flex flex-row justify-center items-center bg-slate-800"
        style={{
          backgroundImage:
            // "url('https://res.cloudinary.com/di2rbecxm/image/upload/v1676543714/NFTMARKETPLACE/creatorbackground-3_zpqw0o.jpg')",
            "url('https://c1.wallpaperflare.com/preview/113/230/329/fabric-texture-pattern-textile.jpg')",
        }}
      >
        <div className="w-full h-full backdrop-blur-lg flex flex-row justify-center items-center shadow-lg">
          <div className="w-4/5 h-5/6 border-gray-300 border-[3px] bg-slate-900 rounded-lg py-6 mt-16">
            <div className="grid md:grid-cols-[2fr_1fr] h-full items-center">
              <div className="text-white ml-20">
                <h1 className="xl:text-7xl lg:text-5xl md:text-4xl font-semibold flex flex-col gap-8">
                  <span
                  // style={{ textShadow: "2px 2px 1px black" }}
                  >
                    Buy, Create &
                  </span>
                  <span
                  // style={{ textShadow: "2px 2px 1px black" }}
                  >
                    Sell Unique
                  </span>
                  <span
                    // style={{ textShadow: "2px 2px 1px black" }}
                    className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-600"
                  >
                    NFT Collection
                  </span>
                </h1>

                <Button
                  text="Explore LFG 🚀"
                  onclick={dummyFunction}
                  style="w-3/5 p-2 mt-20"
                />
              </div>

              <div className="mr-20">
                <NftCard
                  image={homeNftImage}
                  name="Swagger"
                  description="I am Swagger"
                  price="76.25 ETH"
                  style={{ transform: "rotateZ(12deg) skewX(12deg)" }}
                  // darkTheme={darkTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}

      <div className="bg-slate-800 pb-16">
        <h1 className="text-white font-semibold text-center py-16 text-5xl">
          Notable Collections
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-[90vw] mx-auto gap-8">
          {Nfts.map((element, index) => {
            return <NftCard {...element} key={index + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
