import { useParams } from "react-router-dom";

const Checkout = () => {
  const { bicycleId } = useParams();
  return (
    <div className="pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      Checkout for {bicycleId}
    </div>
  );
};

export default Checkout;
