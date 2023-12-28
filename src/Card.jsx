import { FaRegHeart, FaSync, FaSearch } from "react-icons/fa";

const Card = ({ slide }) => {
  return (
    <div className="h-auto relative lg:h-[450px] w-full flex flex-col md:flex-row items-center justify-center gap-5 group">
      <div className="relative h-full flex-1 flex items-center justify-center">
        <img
          src={slide.image}
          alt=""
          className="h-44 lg:h-auto mx-auto my-auto"
        />
        <div className="h-auto lg:h-96 w-full opacity-0 transition-opacity duration-300 bg-slate-300  group-hover:opacity-40 absolute top-0 left-0 bg-center bg-cover flex items-center justify-center my-6"></div>
        <div className="h-auto lg:h-96 w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-5 z-5">
          <div className="bg-white p-2 rounded-full text-black">
            <FaRegHeart size={24} className="hover:text-orange-600" />
          </div>
          <div className="bg-white p-2 rounded-full text-black">
            <FaSync size={24} className="hover:text-orange-600" />
          </div>
          <div className="bg-white p-2 rounded-full text-black">
            <FaSearch size={24} className="hover:text-orange-600" />
          </div>
        </div>
      </div>
      {!slide.discount ? null : (
        <span className="h-12 w-12 rounded-full bg-orange-600 absolute top-2 left-2 flex items-center justify-center">
          <p className="text-white font-medium  ">-{slide.discount}%</p>
        </span>
      )}

      <div className="space-y-5 flex-1 my-4">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-500 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold">{slide.title}</h3>
        <p className="text-2xl text-orange-700 font-bold">${slide.price}</p>
        <p className="text-justify">
          The MSI Modern 14 C12M Laptop features Intel Core i3-1215U Processor
          (10M Cache, 3.30 GHz, up to 4.40 GHz) and 8GB DDR4 3200MHz RAM
          onboard. The has 10MB of L3 cache and operates at 1200 MHz by default.
        </p>
        <button className="bg-slate-800 opacity-0 group-hover:opacity-100 text-white px-6 py-3 uppercase rounded-3xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
