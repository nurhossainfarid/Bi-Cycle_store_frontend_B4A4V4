import { useTheme } from "@/providers/theme-provider";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { themeHandler } from "@/utils/themeHandler";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });
  const targetDate: string = "2025-02-15T23:59:59";
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeLeft = new Date(targetDate).getTime() - now;

    if (timeLeft <= 0) {
      return "Offer Expired!";
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [timeLeft, setTimeLeft] = useState<string>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mx-auto py-10 w-full">
      <div className="bg-gradient-to-r from-bright-royal-blue from-0% to-electric-violet to-100% py-5 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-5 rounded-md">
        <div>
          <Title
            text="🔥 BIGGEST OFFER! Up to 50% OFF"
            fontSize="xl"
            textAlign="left"
          />
          <Title
            text="—Hurry, limited time! ⏳"
            fontSize="xl"
            textAlign="left"
          />
        </div>
        <div>
          <Title text={timeLeft} fontSize="3xl" />
        </div>
        <Button
          variant={"secondary"}
          className="bg-white text-black hover:text-white animate-bounce"
        >
          Grab it now!
        </Button>
      </div>
      <div className="flex md:flex-row items-center justify-between pt-20">
        <div className="flex flex-col gap-6">
          <Title text="Company" fontSize="lg" color={textColor} />
          <div className="flex flex-col gap-2" style={{ color: textColor }}>
            <a href="#">About</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Help" fontSize="lg" color={textColor} />
          <div className="flex flex-col gap-2">
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Resources" fontSize="lg" color={textColor} />
          <div className="flex flex-col gap-2">
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Links" fontSize="lg" color={textColor} />
          <div className="flex flex-col gap-2">
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
