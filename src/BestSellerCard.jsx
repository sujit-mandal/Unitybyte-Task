const BestSellerCard = ({ seller }) => {
  const { image, productName, discountPrice, price } = seller;

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 p-4 md:p-4 lg:p-6">
      <div>
        <img
          src={image}
          alt=""
          className="h-28 w-28 md:h-20 md:w-20 lg:h-24 lg:w-28 "
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
        <div className="flex items-center">{/* Your rating icons here */}</div>
        <div className="flex flex-col">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
            {productName}
          </h3>
          <div className="flex items-center justify-start gap-4">
            <h2 className="text-md md:text-lg lg:text-xl font-bold text-orange-700">
              ${discountPrice}
            </h2>
            <h2 className="text-sm md:text-md lg:text-lg font-bold text-gray-700 line-through">
              ${price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
