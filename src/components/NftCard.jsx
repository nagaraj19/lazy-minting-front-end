import React from "react";

const NftCard = ({ image, name, description, price, style }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-white transform border-white border-[4px] cursor-pointer hover:bg-slate-300 hover:scale-105 transition-all ease-linear"
      style={style}
    >
      <img className="w-full h-72 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {price}
        </span>
      </div>
    </div>
  );
};

export default NftCard;
