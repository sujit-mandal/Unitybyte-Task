import { useEffect, useState } from "react";
import { FaRegHeart, FaSync, FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const slides = [
  {
    title: "Product-1",
    discount: 4,
    image:
      "https://parspng.com/wp-content/uploads/2023/03/computerpng.parspng.com-5.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore culpa natus vel fuga unde. Quaerat dignissimos ipsa,possimus accusantium ratione saepe aliquid dolorum distinctio facere blanditiis, est voluptate ipsum deserunt.",
    price: 120,
  },
  {
    title: "Product-2",
    discount: null,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzuAgswmbAX1vOqu8ovXD3WWNtPwuNenFSA&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore culpa natus vel fuga unde. Quaerat dignissimos ipsa,possimus accusantium ratione saepe aliquid dolorum distinctio facere blanditiis, est voluptate ipsum deserunt.",
    price: 130,
  },
  {
    title: "Product-3",
    discount: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NjNjbvm_qGqrT7aTR5UeNh5lYvM0akLNxg&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore culpa natus vel fuga unde. Quaerat dignissimos ipsa,possimus accusantium ratione saepe aliquid dolorum distinctio facere blanditiis, est voluptate ipsum deserunt.",
    price: 150,
  },
  {
    title: "Product-4",
    discount: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NjNjbvm_qGqrT7aTR5UeNh5lYvM0akLNxg&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore culpa natus vel fuga unde. Quaerat dignissimos ipsa,possimus accusantium ratione saepe aliquid dolorum distinctio facere blanditiis, est voluptate ipsum deserunt.",
    price: 150,
  },
];
function App() {
  useEffect(() => {
    const outerDiv = document.getElementById("outerDiv");
    const buttons = document.getElementsByClassName("btn");

    const handleMouseOver = () => {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("opacity-100");
      }
    };

    const handleMouseOut = () => {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("opacity-100");
      }
    };

    if (outerDiv) {
      outerDiv.addEventListener("mouseover", handleMouseOver);
      outerDiv.addEventListener("mouseout", handleMouseOut);
    }

    // Cleanup the event listeners when the component unmounts
    return () => {
      if (outerDiv) {
        outerDiv.removeEventListener("mouseover", handleMouseOver);
        outerDiv.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < slides.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <div className="m-20 relative"  id="outerDiv">
        <div className="grid grid-cols-2 relative overflow-hidden ">
          {slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
            <Card key={index} slide={slide} />
          ))}
        </div>

        <hr className="border m-5" />
        <div className="grid grid-cols-2 relative overflow-hidden transition-transform duration-3300 ease-in-out">
          {slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
            <Card key={index} slide={slide} />
          ))}
        </div>
        <button
          className="absolute btn top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-lg text-gray-400 px-4 py-4 rounded-full opacity-0  hover:bg-orange-500 hover:text-white mr-5"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack size={24} />
        </button>
        <button
          className="absolute btn top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg text-gray-400 px-4 py-4 rounded-full opacity-0  hover:bg-orange-500 hover:text-white mr-5"
          onClick={handleNextClick}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </>
  );
}

export default App;
