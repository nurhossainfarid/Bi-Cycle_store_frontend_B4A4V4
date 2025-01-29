import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CCycle1 from "../../images/c-cycle1.jpg";
import CCycle2 from "../../images/c-cycle2.jpg";
import CCycle6 from "../../images/c-cycle6.jpg";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import { Button } from "../ui/button";

const BicycleCarousel = () => {
  interface Bicycle {
    id: number;
    name: string;
    description: string;
    brand: string;
    image: string;
  }

  const bicycles: Bicycle[] = [
    {
      id: 1,
      name: "On-Road, Off-Road, Any Road",
      description:
        "It's the most advanced, best performing alloy race bike ever made. Fitting, since aluminum is the 13th element.",
      brand: "Trek",
      image: CCycle1,
    },
    {
      id: 2,
      name: "Break Free From The Same Roads",
      description:
        "Don’t overthink it. Mellow to mad. Wild to mild. Whatever your trail riding style, Habit’s got what you need.",
      brand: "Giant",
      image: CCycle2,
    },
    {
      id: 3,
      name: "On-Road, Break Free From The Same Roads",
      description:
        "A perfect blend of road and mountain bike features. Whatever your trail riding style, Habit’s got what you need.",
      brand: "Specialized",
      image: CCycle6,
    },
  ];

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {bicycles.map((bike) => (
          <SwiperSlide key={bike.id} className="relative">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full object-cover rounded-lg"
              style={{ height: "450px" }}
            />
            <div className="flex flex-col items-center md:items-end justify-center md:justify-end gap-5 absolute top-10 md:top-16 lg:top-20 right-5 md:right-5 lg:right-5 w-4/5 md:w-2/3 lg:w-2/5 text-white p-4 rounded-lg">
              <h1
                className="text-lg md:text-2xl lg:text-5xl font-bold text-center md:text-right"
                style={{ fontFamily: "Outfit" }}
              >
                {bike.name}
              </h1>
              <p
                className="text-sm md:text-base lg:text-md text-center md:text-right"
                style={{ fontFamily: "Inter" }}
              >
                {bike.description}
              </p>
              <Button className="text-white text-sm md:text-xl p-3 md:p-5 mt-3 md:mt-10">
                Learn More
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BicycleCarousel;
