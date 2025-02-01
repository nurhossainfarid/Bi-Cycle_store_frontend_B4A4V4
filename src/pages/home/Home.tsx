import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/pages/home/CustomerReview";
import BestTrailBike from "./BestTrailBike";
import UpcomingShopCategory from "./UpcomingShopCategory";
import UpcomingService from "./UpcomingService";
import DiscountCycle from "./DiscountCycle";
import News from "./News";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-28 items-center justify-center my-5">
      <Banner />
      <Products />
      <BestTrailBike />
      <UpcomingShopCategory />
      <DiscountCycle />
      <UpcomingService />
      <CustomerReview />
      <News />
    </div>
  );
};

export default Home;
