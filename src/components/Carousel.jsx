import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150x200", // Replace with your image link
    name: "Patchology",
    price: "$15.00",
    rating: 4.5,
    reviews: 376,
    arrival: "Arrives before Christmas",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150x200",
    name: "Leith",
    price: "$15.97 (57% off)",
    originalPrice: "$38.00",
    rating: 4.0,
    reviews: 10,
    arrival: "Arrives before Christmas",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150x200",
    name: "Jean Paul Gaultier",
    price: "$39.97 (33% off)",
    originalPrice: "$60.00",
    rating: 4.5,
    reviews: 196,
    arrival: "Arrives before Christmas",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150x200",
    name: "Kate Spade New York",
    price: "$19.97 (48% off)",
    originalPrice: "$38.00",
    rating: 4.5,
    reviews: 128,
    arrival: "Arrives before Christmas",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150x200",
    name: "Adornia",
    price: "$32.97 (81% off)",
    originalPrice: "$175.00",
    rating: 4.5,
    reviews: 279,
    arrival: "Arrives before Christmas",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150x200",
    name: "Olaplex",
    price: "$12.50 (26% off)",
    originalPrice: "$17.00",
    rating: 4.5,
    reviews: 3032,
    arrival: "Arrives before Christmas",
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Stocking Stuffers Under $50</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-green-600 text-sm font-medium">
                {product.arrival}
              </p>
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">
                {product.price}{" "}
                {product.originalPrice && (
                  <span className="line-through">{product.originalPrice}</span>
                )}
              </p>
              <div className="flex items-center space-x-1 text-sm mt-2">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;