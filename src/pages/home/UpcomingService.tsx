import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OurServices } from "@/constants";

const UpcomingService = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold uppercase">
          Our Bike Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {OurServices.map((item) => (
          <Card
            key={item.title}
            className="hover:scale-105 transition-transform duration-300 bg-black"
          >
            <CardHeader className="p-0">
              <img src={item.image} className="rounded-t-lg h-80" />
            </CardHeader>
            <CardContent className="py-8">
              <CardTitle className="text-lg md:text-2xl lg:text-4xl pb-2">
                {item.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {item.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-xs border-none">
                READ MORE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button variant={"outline"} className="text-white text-lg">
        More Products
      </Button>
    </div>
  );
};

export default UpcomingService;
