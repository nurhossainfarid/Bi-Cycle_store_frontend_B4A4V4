import Paragraph from "@/components/ui/paragraph";
import Image from "../../images/bicycle1.webp";
import Title from "@/components/ui/title";
import { Progress } from "@/components/ui/progress";
const BestTrailBike = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-20">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="w-2/3">
        <Paragraph text="BEST TRAIL BIKE" fontSize="sm" />
        <Title
          text="TRAIL VIGILLON ALLEZ TX-86 MOUNTAIN BIKE"
          fontSize="4xl"
          textAlign="left"
        />
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-col gap-3">
            <Title text="Tuneups & Builds" fontSize="lg" textAlign="left" />
            <Progress value={80} className="w-[90%] h-1" />
          </div>
          <div className="flex flex-col gap-3">
            <Title text="Adjust & Install" fontSize="lg" textAlign="left" />
            <Progress value={96} className="w-[90%] h-1" />
          </div>
          <div className="flex flex-col gap-3">
            <Title text="Personal Bike Fit" fontSize="lg" textAlign="left" />
            <Progress value={90} className="w-[90%] h-1" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-2">
            <Title text="Shifters" fontSize="xl" textAlign="left" />
            <Paragraph text="TRX S6000 10 Speed" />
          </div>
          <div className="flex flex-col gap-2">
            <Title text="F/R Brakes" fontSize="xl" textAlign="left" />
            <Paragraph text="MTR200 Hydraulic Brake" />
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Rear Shock" fontSize="xl" textAlign="left" />
            <Paragraph text="Raiden TR Air, 184 x 44mm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTrailBike;
