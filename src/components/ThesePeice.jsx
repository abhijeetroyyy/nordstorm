import React from "react";

const data = [
  {
    id: 1,
    title: "Women's Cashmere Sweaters",
    image: "https://n.nordstrommedia.com/it/febf04a1-fd73-4ed2-b33f-61dd8abbb583.jpeg?h=382&w=402", // Replace with your actual image URL
    link: "#",
  },
  {
    id: 2,
    title: "Men's Cashmere Sweaters",
    image: "https://n.nordstrommedia.com/it/fd4406f1-59cc-41ea-a0f7-3b5212e95b43.jpeg?h=382&w=402", // Replace with your actual image URL
    link: "#",
  },
  {
    id: 3,
    title: "Designer Fragrances & Gift Sets",
    image: "https://n.nordstrommedia.com/it/93aec995-9fae-477c-ad22-3e758de3f7f7.jpeg?h=382&w=402", // Replace with your actual image URL
    link: "#",
  },
];

const ThesePeice = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
      {/* Text Section */}
      <div className="space-y-6 md:col-span-1">
        <h2 className="text-4xl font-extrabold text-gray-900">These, Please</h2>
        <p className="text-lg text-gray-600">
          The pieces you can't stop thinking about—all in one place.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
        {data.map((item) => (
          <div key={item.id} className="text-center group transition-all duration-300">
            <div className="relative overflow-hidden  shadow-lg ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-all duration-300 ease-in-out"
              />
            </div>
            <a
              href={item.link}
              className="text-gray-900 text-lg font-semibold mt-4 inline-block hover:underline  transition duration-200"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThesePeice;
