import React, { useState } from "react";

import components from "../components";
import images from "../../images";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    externalLink: "",
    description: "",
    properties: [],
  });

  const [properties, setProperties] = useState([]);

  const handleAddProperty = () => {
    setProperties([...properties, { key: "", value: "" }]);
  };

  const handlePropertyChange = (index, key, value) => {
    const updatedProperties = [...properties];
    updatedProperties[index] = { key, value };
    setProperties(updatedProperties);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="flex justify-around items-center text-white bg-slate-800 w-screen py-44">
      {/* Wrapper */}
      <div className="shadow-lg border-[1px] border-white w-[700px] px-8 py-16 rounded-lg bg-slate-900">
        {/* Headings */}
        <div>
          <h1 className="text-5xl font-semibold mb-8">Create New NFT</h1>
          <p className=" text-sm text-gray-300">
            <span className=" text-red-600">*</span> Required Fields
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <h3 className="text-2xl">Upload Image *</h3>
            <components.DropBox />
          </div>

          <div className="mt-8">
            <h3 className="text-2xl">Name *</h3>
            <input
              required
              placeholder="NFT Name"
              className="mt-2 py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-white bg-transparent text-white text-[14px] placeholder:text-gray-400 rounded-[10px] w-4/6 max-w-[500px] hover:border-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-2xl">Description </h3>
            <textarea
              rows="5"
              className="mt-2 py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-white bg-transparent text-white text-[14px] placeholder:text-gray-400 rounded-[10px] w-4/6 max-w-[500px] hover:border-blue-500 focus:border-blue-500"
              placeholder="Provide a detailed description of your NFT."
            />
          </div>

          <div className="mt-8">
            <div>
              <h3 className="text-2xl">Properties</h3>
            </div>
            <components.AddNftProperties
              properties={properties}
              handlePropertyChange={handlePropertyChange}
              handleAddProperty={handleAddProperty}
            />
          </div>

          <div>
            <components.Button
              text="Submit"
              style=" w-full py-2"
              btnType="submit"
            />
          </div>
        </form>
      </div>
      <div>
        <img src={images.createNftBackground} />
      </div>
    </div>
  );
};

export default Create;
