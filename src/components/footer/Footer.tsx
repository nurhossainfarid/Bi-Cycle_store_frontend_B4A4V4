import { useTheme } from "@/providers/theme-provider";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { themeHandler } from "@/utils/themeHandler";
import { useEffect, useState } from "react";
import Img1 from "../../images/bicycle1.webp";
import Paragraph from "../ui/paragraph";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";

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
      <div>
        <img src={Img1} alt="" />
      </div>
      <div className="bg-gradient-to-r from-bright-royal-blue from-0% to-electric-violet to-100% py-5 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-5 rounded-md">
        <div className="flex gap-5 items-center">
          <img src={Img1} alt="" className="w-20" />
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
      <div className="flex lg:flex-row justify-between items-start gap-10 pt-20">
        <div className="flex flex-col gap-6" style={{ width: "30%" }}>
          <Title
            text="TRAIL"
            fontSize="xxxl"
            color={textColor}
            textAlign="left"
          />
          <Paragraph
            text={
              "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudanti totam aperiam inventore veritatis congue tristique ultrices. Purus finibus dapibus nunc neque commodo tellusin dapi magna quam posuere."
            }
            fontSize="sm"
          />
          <div>
            <Title
              text="Social Media"
              fontSize="xxl"
              color={textColor}
              textAlign="left"
            />
            <div className="flex gap-5 mt-5" style={{ color: textColor }}>
              <Facebook
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1500"
                size={40}
              />
              <Youtube
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1000"
                size={40}
              />
              <Instagram
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1500"
                size={40}
              />
              <Linkedin
                className="p-2 border-2 hover:border-vivid-amethyst border-bright-royal-blue animate-pulse hover:scale-110 duration-1000"
                size={40}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div>
            <Title text="Want to call with us?" fontSize="xl" />
            <div className="flex gap-5 items-center mt-5">
              <PhoneCall className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Phone" fontSize="md" textAlign="left" />
                <Paragraph text="+123 456 7890" fontSize="sm" />
              </div>
            </div>
          </div>
          <Title
            text="Quick Links"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2" style={{ color: textColor }}>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Title text="Want to email with us?" fontSize="xl" />
            <div className="flex gap-5 items-center mt-5">
              <Mail className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Email" fontSize="md" textAlign="left" />
                <Paragraph text="trail@domain.com" fontSize="sm" />
              </div>
            </div>
          </div>
          <Title
            text="Customer Service"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div>
            <Title text="Want to visit us?" fontSize="xl" textAlign="left" />
            <div className="flex gap-5 items-center mt-5">
              <MapPin className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Location" fontSize="md" textAlign="left" />
                <Paragraph
                  text="Puputan Renon 122, Dhaka"
                  fontSize="sm"
                />
              </div>
            </div>
          </div>
          <Title
            text="OUR SHOP"
            fontSize="lg"
            color={textColor}
            textAlign="left"
          />
          <div className="flex flex-col gap-2">
            <a href="#">Bikes & Parts</a>
            <a href="#">Clothing</a>
            <a href="#">Bikes For Rent</a>
            <a href="#">Booking Form</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
