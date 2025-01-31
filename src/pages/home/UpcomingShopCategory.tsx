import { Button } from "@/components/ui/button";
import { bicycleAccessory } from "@/constants";

const UpcomingShopCategory = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2">
        <p className="font-inter animate-pulse opacity-80">UPCOMING</p>
        <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl font-semibold">
          Shop by Category
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {bicycleAccessory.map((item) => (
          <div className="relative h-80">
            <img src={item.image} alt="Apparel" className="w-full h-[100%]" />
            <div className="flex flex-col items-center justify-center md:justify-end gap-5 absolute bottom-0 w-full hover:bg-black/20 py-5">
              <h1 className="text-base md:text-lg lg:text-3xl font-bold text-center md:text-right font-outfit">
                {item.name}
              </h1>
              <Button className="text-white text-sm rounded-sm">
                SHOP NOW
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingShopCategory;
