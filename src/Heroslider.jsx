import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";

const slides = [
  {
    title: "Acer KA222Q H 21.5inch 100Hz AMD",
    discount: 4,
    image:
      "https://parspng.com/wp-content/uploads/2023/03/computerpng.parspng.com-5.png",

    price: 120,
  },
  {
    title: "EKSA E1000 7.1 Surround Sound Wired",
    discount: null,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzuAgswmbAX1vOqu8ovXD3WWNtPwuNenFSA&usqp=CAU",

    price: 130,
  },
  {
    title: "MSI G244F E2 23.8 inch FHD",
    discount: 6,
    image:
      "https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-200x200.webp",

    price: 150,
  },
  {
    title: "Acer Aspire 7 A715-42G-R2NE Ryzen 5",
    discount: 20,
    image:
      "https://www.startech.com.bd/image/cache/catalog/laptop/acer/aspire-7-a715-42g-r2ne/aspire-7-a715-42g-r2ne-01-500x500.webp",

    price: 150,
  },
  {
    title: "F&D A180X Multimedia Bluetooth",
    discount: 20,
    image:
      "https://www.startech.com.bd/image/cache/catalog/speaker/f-and-d/a180x/a180x-228x228.jpg",

    price: 150,
  },
];
const slides1 = [
  {
    title: "Logitech Z906 5.1 Speaker",
    discount: 4,
    image:
      "https://www.startech.com.bd/image/cache/catalog/Speaker/z906-gallery-228x228.png",

    price: 120,
  },
  {
    title: "APOLLO 650VA 300W UPS",
    discount: null,
    image:
      "https://www.startech.com.bd/image/cache/catalog/ups/apollo/650va/650v-02-228x228.webp",

    price: 130,
  },
  {
    title: "Colorful GeForce GT710-2GD3-V",
    discount: 6,
    image:
      "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-228x228.jpg",

    price: 150,
  },
  {
    title: "Intel 10th Gen Core i3-10100",
    discount: 20,
    image:
      "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/10th-gen-core-i3-02-228x228.webp",

    price: 150,
  },
  {
    title: "Lenovo IdeaPad 3 15ALC6 Ryzen",
    discount: 20,
    image:
      "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-3-15alc6/ideapad-3-15alc6-228x228.webp",

    price: 150,
  },
];

const Heroslider = () => {
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
    <div className="mx-5 my-10 lg:mx-20 lg:my-20 relative" id="outerDiv">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden gap-10">
        {slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
          <Card key={index} slide={slide} />
        ))}
      </div>

      <hr className="border m-5 hidden lg:flex" />
      <div className="hidden lg:grid lg:grid-cols-2 relative overflow-hidden gap-10">
        {slides1.slice(currentIndex, currentIndex + 2).map((slide, index) => (
          <Card key={index} slide={slide} />
        ))}
      </div>
      <button
        className="absolute btn top-1/2 -left-5 transform -translate-y-1/2 bg-white shadow-lg text-gray-400 px-4 py-4 rounded-full opacity-0  hover:bg-orange-500 hover:text-white mr-5 z-10"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        className="absolute btn top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg text-gray-400 px-4 py-4 rounded-full opacity-0  hover:bg-orange-500 hover:text-white mr-5 z-10"
        onClick={handleNextClick}
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default Heroslider;
