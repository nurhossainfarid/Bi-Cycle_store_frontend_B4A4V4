import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/components/customerReview/CustomerReview";
import BestTrailBike from "./BestTrailBike";
import UpcomingShopCategory from "./UpcomingShopCategory";
import UpcomingService from "./UpcomingService";
import DiscountCycle from "./DiscountCycle";
const Home = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 items-center justify-center my-5">
      <Banner />
      <Products />
      <BestTrailBike />
      <UpcomingShopCategory />
      <DiscountCycle />
      <UpcomingService />
      <CustomerReview />
    </div>
  );
};

export default Home;
