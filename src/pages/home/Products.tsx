import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";
import { bicyclesData } from "@/constants";

const Products = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <Title text="Featured Products" fontSize="2xl" />
        <Paragraph
          text="You can ride to improve your fitness, you can ride further and carry more gear, you can leave the car at home and help save the environment."
          width="60%"
          textAlign="center"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {bicyclesData.map((bicycle) => (
          <ProductCard key={bicycle.name} bicycle={bicycle} />
        ))}
      </div>
      <Button className="text-white text-lg">More Products</Button>
    </div>
  );
};

export default Products;
