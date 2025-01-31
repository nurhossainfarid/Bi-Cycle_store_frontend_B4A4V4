import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import { TBicycleData } from "@/constants";

import { FC } from "react";

interface ProductCardProps {
  bicycle: TBicycleData;
}

const ProductCard: FC<ProductCardProps> = ({ bicycle }) => {
  const { name, model, brand, frame, quantity, type, image } = bicycle;
  return (
    <Card className="hover:border-2 hover:border-white hover:scale-105 transition-transform duration-300">
      <div className="p-0">
        <img src={image?.front_view} className="rounded-t-lg" />
      </div>
      <CardHeader>
        <CardDescription className="-mb-2">{type}</CardDescription>
        <CardTitle className="text-xl pb-2">{name}</CardTitle>
        <hr className="border-white opacity-60" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Model */}
          <div className="flex flex-col justify-center items-start">
            <Paragraph text="Model" fontSize="xs" opacity="0.6" />
            <Paragraph text={model} fontSize="md" opacity="1" />
          </div>
          {/* Brand */}
          <div className="flex flex-col justify-center items-start ">
            <Paragraph text="Brand: " fontSize="xs" opacity="0.6" />
            <Paragraph text={brand} fontSize="md" opacity="1" />
          </div>
          {/* Color */}
          <div className="flex flex-col justify-center items-start">
            <Paragraph text="Color" fontSize="xs" opacity="0.6" />
            <Paragraph text={frame.color} fontSize="md" opacity="1" />
          </div>
          {/* Material */}
          <div className="flex flex-col justify-center items-start">
            <Paragraph text="Material" fontSize="xs" opacity="0.6" />
            <Paragraph text={frame.material} fontSize="md" opacity="1" />
          </div>
          {/* Frame Size */}
          <div className="flex flex-col justify-center items-start">
            <Paragraph text="Frame Size" fontSize="xs" opacity="0.6" />
            <Paragraph text={frame.size} fontSize="md" opacity="1" />
          </div>
          {/* Quantity */}
          <div>
            <div className="flex flex-col justify-center items-start">
              <Paragraph text="Quantity" fontSize="xs" opacity="0.6" />
              <Paragraph text={quantity} fontSize="md" opacity="1" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="text-xs">
          READ MORE
        </Button>
        <Button className="text-white text-xs">ADD TO CARD</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
