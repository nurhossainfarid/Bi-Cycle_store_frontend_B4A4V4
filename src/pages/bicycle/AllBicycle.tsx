import ProductCard from "@/components/products/ProductCard";
import { bicyclesData } from "@/constants";

const AllBicycle = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-10">
      <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl uppercase font-semibold text-center">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {bicyclesData.map((bicycle) => (
          <ProductCard key={bicycle.name} bicycle={bicycle} />
        ))}
      </div>
    </div>
  );
};

export default AllBicycle;
