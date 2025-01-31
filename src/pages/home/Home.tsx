import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/components/customerReview/CustomerReview";
import BestTrailBike from "./BestTrailBike";
import UpcomingShopCategory from "./UpcomingShopCategory";
import UpcomingService from "./UpcomingService";
const Home = () => {
  return (
    <div className="flex flex-col gap-24 items-center justify-center my-5">
      <Banner />
      <Products />
      <BestTrailBike />
      <UpcomingShopCategory />
      <UpcomingService />
      <CustomerReview />
    </div>
  );
};

export default Home;
