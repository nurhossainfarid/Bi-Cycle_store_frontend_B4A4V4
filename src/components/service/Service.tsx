import { toolData } from "@/constants";
import Result1 from "../../assets/result1.png";
import Result2 from "../../assets/result2.png";
import { Button } from "../ui/button";
import Paragraph from "../ui/paragraph";
import Title from "../ui/title";
import TrustedCustomer from "./TrustedCustomer";
import WebSiteService from "../../assets/webbuild.png";

const Service = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-16 mx-auto py-10"
      style={{ width: "1300px" }}
    >
      <TrustedCustomer />
      <div className="flex flex-col md:flex-row mx-auto justify-evenly">
        <div className="w-full">
          <img src={Result1} className="" alt="" />
        </div>
        <div className="w-5/6 flex flex-col items-start justify-center gap-10">
          <Title
            text={
              "Create content efficiently and quickly with great AI writing tools"
            }
            fontSize="3xl"
          />
          <Paragraph
            text={
              "150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc."
            }
          />
          <Button className="text-white">Start 14 Days Free Trial</Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto pl-16">
        <div className="w-full order-2">
          <img src={Result2} className="" alt="" />
        </div>
        <div className="w-5/6 flex flex-col items-start justify-center gap-10 order-1">
          <Title
            text={
              "Write what you want to convey through clear, & authentic writing"
            }
            fontSize="3xl"
          />
          <Paragraph
            text={
              "AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized."
            }
          />
          <Button className="text-white">Start 14 Days Free Trial</Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title text="54 exciting writing tools" fontSize="2xl" />
          <Paragraph
            text={
              "AI engines take information from various sources and read them like a human would do."
            }
            width="60%"
            textAlign="center"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {toolData.map((tool) => (
            <div
              key={tool.id}
              className="flex justify-center items-start gap-5"
              style={{
                backgroundColor: "#282A37",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              <img src={tool.img} alt={tool.title} />
              <div className="flex flex-col gap-2">
                <Title text={tool.title} fontSize="base" />
                <Paragraph text={tool.description} fontSize="xs" />
              </div>
            </div>
          ))}
        </div>
        <Button variant={"outline"} className="border-none">
          See all 54 available tools
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <Title text="Mixland helps you" fontSize="2xl" />
          <Title text="build beautiful website" fontSize="2xl" />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center gap-16 py-10">
          <div className="flex flex-col gap-5">
            <Button className="text-white text-md text-left">Blog Headlines</Button>
            <Button className="text-white text-md" variant={"outline"}>
              Blog Intros
            </Button>
            <Button className="text-white text-md" variant={"outline"}>
              Content Rewriter
            </Button>
            <Button className="text-white text-md" variant={"outline"}>
              Facebook Ads
            </Button>
            <Button className="text-white text-md" variant={"outline"}>
              Product Description
            </Button>
            <Button className="text-white text-md" variant={"outline"}>
              PAS Copywriting Formula
            </Button>
          </div>
          <div>
            <img src={WebSiteService} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
