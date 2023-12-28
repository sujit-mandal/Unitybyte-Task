import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import BestSellerCard from "./BestSellerCard";

const bestSeller1 = [
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/smartwatch/amazfit/pop-3r/pop-3r-01-500x500.webp",
    productName: "Amazfit Pop 3R 1.43 AMOLED Display Bluetooth",
    discountPrice: 5050,
    price: 6050,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/earbuds/joyroom/jr-tn1/joyroom-jr-tn1-earbuds-black-01-500x500.jpg",
    productName: "Joyroom JR-TN1 ENC TWS Bluetooth Earbuds",
    discountPrice: 1550,
    price: 2050,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/drones/dji/mini-3/mini-3-fly-more-combo-01-500x500.webp",
    productName: "DJI Mini 3 Drone Fly More Combo with DJI ",
    discountPrice: 151550,
    price: 200050,
  },
];
const bestSeller2 = [
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/neckband/edifier/w210bt/w210bt-01-500x500.webp",
    productName: "Edifier W210BT Wireless Neckband",
    discountPrice: 2900,
    price: 3050,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/drones/toy-drone/e98/e98-01-500x500.webp",
    productName: "E98 4K Camera WiFi Mini Toy Drone",
    discountPrice: 7500,
    price: 8050,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/power-bank/baseus/bipow-pro-10000mah-20w/bipow-pro-10000mah-20w-01-500x500.webp",
    productName: "Baseus Bipow Pro 10000mAh",
    discountPrice: 3390,
    price: 4390,
  },
];
const bestSeller3 = [
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/power-bank/joyroom/jr-qp190-mini/jr-qp190-mini-01-500x500.webp",
    productName: "Xiaomi MI V3 PLM18ZM 20000mAh",
    discountPrice: 1975,
    price: 2975,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/earphone/baseus/wm01/wm01-black-01-500x500.jpg",
    productName: "Winter Fest Baseus WM01 Enock True ",
    discountPrice: 1550,
    price: 2550,
  },
  {
    image:
      "https://www.startech.com.bd/image/cache/catalog/power-bank/joyroom/jr-w050/jr-w050-01-500x500.webp",
    productName: "oyroom JR-W050 20W 10000mah Magnetic",
    discountPrice: 2550,
    price: 3050,
  },
];
const BestSeller = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="navigation-wrapper">
      <div className="flex flex-col lg:flex-row lg:gap-10 mb-20 mx-10">
        <img
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/winter-fest/winter-fest-bkash-free-delivery-home-982x500.png"
          alt=""
          className="my-8 w-auto h-auto lg:my-28 rounded-lg md:w-3/5 md:3/5 mx-auto lg:flex-1"
        />

        <div className="flex-1 overflow-x-hidden relative">
          <h1 className="text-xl lg:text-2xl uppercase font-semibold border-b-4 border-orange-600 w-[280px]">
            Best Sellers
          </h1>
          <hr className="border-1" />

          <div ref={sliderRef} className="keen-slider my-10">
            <div className="keen-slider__slide space-y-10">
              {bestSeller1.map((seller, index) => (
                <BestSellerCard key={index} seller={seller} />
              ))}
            </div>
            <div className="keen-slider__slide space-y-10">
              {bestSeller2.map((seller, index) => (
                <BestSellerCard key={index} seller={seller} />
              ))}
            </div>
            <div className="keen-slider__slide space-y-10">
              {bestSeller3.map((seller, index) => (
                <BestSellerCard key={index} seller={seller} />
              ))}
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className="hidden sm:flex md:hidden lg:flex px-3 justify-center absolute top-0 right-0">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      currentSlide === idx
                        ? "  h-3 bg-orange-700 w-14 rounded-full p-2 mr-3"
                        : "w-2 h-3 bg-gray-600 rounded-full p-2 mr-3"
                    }
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
