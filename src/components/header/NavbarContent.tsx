import { CirclePlay } from "lucide-react";
import Title from "../ui/title";
import Paragraph from "../ui/paragraph";
import { Button } from "../ui/button";
import { themeHandler } from "@/utils/themeHandler";
const NavbarContent = ({ theme }) => {
  const { textColor } = themeHandler({ theme });

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Title text="Navbar Content" fontSize="xl" color={textColor} />
      {/* <Title text="Write better" fontSize="4xl" color={textColor} />
      <Title text="content for your" fontSize="4xl" color={textColor} />
      <div className="bg-gradient-to-r from-tangerine-red from-0% to-sunburst-yellow to-100% bg-clip-text mb-10">
        <p className="text-6xl text-transparent font-bold underline">
          Facebook Ads
        </p>
        <hr className="h-1 bg-gradient-to-r from-tangerine-red from-0% to-sunburst-yellow to-100%" />
      </div>
      <Paragraph
        text="Artificial intelligence writing tool helps you create blogs, social media websites and much more."
        color={textColor}
        width="30%"
        textAlign="center"
      />
      <Button className="text-white text-lg mt-10 mb-5 font-bold p-6">
        Start 14 Days Free Trial
      </Button>

      <Button
        variant={"outline"}
        className="text-white text-base font-bold border-none"
        style={{ color: textColor }}
      >
        <CirclePlay /> Watch A Demo
      </Button> */}
    </div>
  );
};

export default NavbarContent;
