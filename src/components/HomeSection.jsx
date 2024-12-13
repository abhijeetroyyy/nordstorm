import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slick carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

// Memoized Slider Item Component
const SliderItem = memo(({ src, alt }) => (
  <div className="flex justify-center">
    <img
      src={src}
      alt={alt}
      className="shadow-2xl w-full h-auto object-contain transition-all duration-300 ease-in-out transform"
    />
  </div>
));

const HomeSection = () => {
  return (
    <div className="w-full">

      {/* Limited-Time Sale Banner (Image Version) */}
      <div className="relative w-full sm:w-10/12 mx-auto my-12">
        <div
          className="relative w-full h-48 sm:h-64 md:h-48 bg-contain bg-center shadow-2xl"
          style={{
            backgroundImage:
              "url('https://n.nordstrommedia.com/it/52c52d03-53c0-4a82-8c30-e5dfb6677c89.png?h=200&w=1608')",
          }}
        >
          {/* Text with Link and Underline */}
          <div className="absolute top-20 left-12 sm:left-28 inset-0 flex justify-center items-center text-center">
            <a
              href="#"
              className="text-black text-sm sm:text-xl hover:underline"
            >
              Shop Limited-Time Sales
            </a>
          </div>
        </div>
      </div>

      {/* Featured Content (Carousel) */}
      <div className="py-12 text-white px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0">
          {/* Carousel for Featured Content */}
          <div className="lg:w-[1427px] w-full">
            <Slider {...sliderSettings}>
              {/* Slider Items */}
              <SliderItem
                src="https://n.nordstrommedia.com/it/c6b9e604-8220-4c25-8417-87a8a4667e67.jpeg?h=720&w=1608"
                alt="Featured 1"
              />
              <SliderItem
                src="https://n.nordstrommedia.com/it/7026dd4b-45f5-4935-822f-852a79c55d86.png?h=720&w=1608"
                alt="Featured 2"
              />
              <SliderItem
                src="https://n.nordstrommedia.com/it/377e21eb-96c5-4812-8608-f10608479124.jpeg?h=720&w=1608"
                alt="Featured 3"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeSection);
