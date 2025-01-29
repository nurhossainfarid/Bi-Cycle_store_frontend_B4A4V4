import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CCycle1 from "../../images/c-cycle1.jpg"
import CCycle2 from "../../images/c-cycle2.jpg"
import CCycle6 from "../../images/c-cycle6.jpg"

const bicycles = [
  { id: 1, name: "Mountain Bike", brand: "Trek", image: CCycle1 },
  { id: 2, name: "Road Bike", brand: "Giant", image: CCycle2 },
  { id: 3, name: "Hybrid Bike", brand: "Specialized", image: CCycle6 },
];

const BicycleCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {bicycles.map((bike) => (
          <SwiperSlide key={bike.id} className="flex flex-col items-center w-full h-full" >
            <img src={bike.image} alt={bike.name} className="w-full h-96 object-cover rounded-lg" style={{height: '450px'}} />
            <div className="text-center p-4 absolute bottom-0 w-full rounded-b-lg">
              <h2 className="text-lg font-semibold">{bike.name}</h2>
              <p className="text-gray-500">{bike.brand}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BicycleCarousel;
