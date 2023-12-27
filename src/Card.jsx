import { FaRegHeart, FaSync, FaSearch } from "react-icons/fa";

const Card = ({ slide }) => {
  return (
    <div
      className="h-80 w-full flex gap-5 group"
      //   style={{ transform: `translateX(${index * 0}%)` }}
    >
      <div className="relative flex-1">
        <img src={slide.image} alt="" className="" />
        <div className=" h-80 w-full opacity-0 transition-opacity duration-300 bg-slate-300  group-hover:opacity-40 absolute top-0 left-0 bg-center bg-cover flex items-center justify-center"></div>
        <div className="h-80 w-full absolute top-0 left-0 opacity-0 transition-opacity duration-3300 group-hover:opacity-100 flex items-center justify-center gap-5 z-10">
          <div className="bg-white p-2 rounded-full text-black">
            <FaRegHeart size={24} />
          </div>
          <div className="bg-white p-2 rounded-full text-black">
            <FaSync size={24} />
          </div>
          <div className="bg-white p-2 rounded-full text-black">
            <FaSearch size={24} />
          </div>
        </div>
      </div>

      <div className="space-y-5 flex-1">
        <p>Rating</p>
        <h3 className="text-3xl font-bold">{slide.title}</h3>
        <p className="text-2xl text-orange-700 font-bold">${slide.price}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          culpa natus vel fuga unde. Quaerat dignissimos ipsa, possimus
          accusantium ratione saepe aliquid dolorum distinctio facere
          blanditiis, est voluptate ipsum deserunt.
        </p>
        <button className="bg-slate-800 opacity-0 group-hover:opacity-100 text-white px-6 py-3 uppercase rounded-3xl">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
