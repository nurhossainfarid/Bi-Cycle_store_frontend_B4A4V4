import { useTheme } from "@/providers/theme-provider";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { themeHandler } from "@/utils/themeHandler";
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
import { useOfferedTimeLeft } from "@/utils/offeredTimeLeft";

const Footer = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });
  const timeLeft = useOfferedTimeLeft("2025-02-20T23:59:59");

  return (
    <div className="mx-auto w-full mt-5 md:10 lg:mt-20">
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
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 pt-10">
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
            <div className="flex gap-5 items-center my-5">
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
            <Paragraph text="About" fontSize="sm" />
            <Paragraph text="Careers" fontSize="sm" />
            <Paragraph text="Blog" fontSize="sm" />
            <Paragraph text="Contact" fontSize="sm" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <Title text="Want to email with us?" fontSize="xl" />
            <div className="flex gap-5 items-center my-5">
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
            <Paragraph text="Privacy Policy" fontSize="sm" />
            <Paragraph text="Terms & Conditions" fontSize="sm" />
            <Paragraph text="Customer Support" fontSize="sm" />
            <Paragraph text="Delivery Details" fontSize="sm" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-6">
          <div>
            <Title text="Want to visit us?" fontSize="xl" textAlign="left" />
            <div className="flex gap-5 items-center my-5">
              <MapPin className="text-bright-royal-blue " size={24} />
              <div>
                <Title text="Location" fontSize="md" textAlign="left" />
                <Paragraph text="Puputan Renon 122, Dhaka" fontSize="sm" />
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
            <Paragraph text="Bikes & Parts" fontSize="sm" />
            <Paragraph text="Clothing" fontSize="sm" />
            <Paragraph text="Bikes For Rent" fontSize="sm" />
            <Paragraph text="Booking Form" fontSize="sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
