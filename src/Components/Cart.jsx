import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const Cart = () => {
  const [search, setSearch] = useState([]);
  const data = useLoaderData();
  const [valu, setValu] = useState("");
  console.log(valu);
   
  useEffect(() => {
    const clear = setTimeout(() =>{
        const users = (valu || "").trim().toLowerCase();
        const myData = users ? data.filter(app => (app.plantName || "").trim().toLowerCase().includes(users)) : data;
        setSearch(myData);
    },700);

    return () => clearTimeout(clear);
  },[valu, data])

  return (
    <div className="flex flex-col gap-5 w-11/12 mx-auto">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => setValu(e.target.value)}
          type="search"
          required
          placeholder="Search"
        />
      </label>
      <div className="grid grid-cols-3 gap-6 mt-20">
        {search.length === 0 ? (
          <span className="loading loading-spinner text-accent"></span>
        ) : (
          search.map((plant) => (
            <div>
              <div
                data-aos="fade-up"
                className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl "
              >
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-75 object-cover object-center transition-transform duration-500 hover:scale-110"
                />

                <div className="p-5 text-accent">
                  {/* Plant Name */}
                  <h2 className="text-xl font-bold mb-2">{plant.plantName}</h2>

                  {/* Category & Provider */}
                  <p className="text-sm text-accent mb-1">
                    Category: {plant.category}
                  </p>
                  <p className="text-sm text-accent mb-3">
                    Provider: {plant.providerName}
                  </p>

                  {/* Rating & Stock */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FaRegStar className="text-yellow-400 w-5 h-5 mr-1" />
                      <span className="text-yellow-300 font-semibold">
                        {plant.rating} ★
                      </span>
                    </div>
                    <span className="text-sm  ">
                      Stock: {plant.availableStock}
                    </span>
                  </div>

                  {/* Care Level */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm bg-white/20 px-2 py-1 rounded-full">
                      Care: {plant.careLevel}
                    </span>
                    <span className="text-lg font-bold text-green-300">
                      ${plant.price}
                    </span>
                  </div>

                  {/* Button */}
                  <Link to={`/detlise/${plant.plantId}`}>
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
