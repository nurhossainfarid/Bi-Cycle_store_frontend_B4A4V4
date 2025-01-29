import ProductCard from "@/components/products/ProductCard";
import Paragraph from "@/components/ui/paragraph";
import Title from "@/components/ui/title";

const Products = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5">
        <Title text="Featured Products" fontSize="2xl" />
        <Paragraph
          text="You can ride to improve your fitness, you can ride further and carry more gear, you can leave the car at home and help save the environment."
          width="60%"
          textAlign="center"
        />
      </div>
      <ProductCard />
    </div>
  );
};

export default Products;
