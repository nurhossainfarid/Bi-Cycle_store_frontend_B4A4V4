import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { bicyclesData } from "@/constants";

const Products = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 md:gap-5">
        <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl uppercase font-semibold">
          Featured Products
        </h1>
        <p className="text-center text-xs md:text-base opacity-80 w-full md:w-2/3">
          You can ride to improve your fitness, you can ride further and carry
          more gear, you can leave the car at home and help save the
          environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {bicyclesData.map((bicycle) => (
          <ProductCard key={bicycle.name} bicycle={bicycle} />
        ))}
      </div>
      <Button variant={"outline"} className="text-white text-lg">
        More Products
      </Button>
    </div>
  );
};

export default Products;
