import Banner from "./Banner";
import Products from "./Products";
import CustomerReview from "@/components/customerReview/CustomerReview";
import BestTrailBike from "./BestTrailBike";
const Home = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center my-5">
      <Banner />
      <Products />
      <BestTrailBike />
      <CustomerReview />
    </div>
  );
};

export default Home;
