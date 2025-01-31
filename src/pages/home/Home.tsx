import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/components/customerReview/CustomerReview";
import BestTrailBike from "./BestTrailBike";
import UpcomingShopCategory from "./UpcomingShopCategory";
const Home = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center my-5">
      <Banner />
      <Products />
      <BestTrailBike />
      <UpcomingShopCategory />
      <CustomerReview />
    </div>
  );
};

export default Home;
