import { Button } from "../ui/button";
import Title from "../ui/title";

const Footer = () => {
  return (
    <div style={{ width: "1300px" }} className="mx-auto">
      <div className="bg-gradient-to-r from-bright-royal-blue from-0% to-electric-violet to-100% py-5 px-10 flex justify-between items-center rounded-md">
        <div>
          <Title text="It will help you improve your writing" fontSize="xxl" />
          <Title text="& bring ideas more c learly." fontSize="xxl" />
        </div>
        <Button variant={"secondary"} className="bg-white text-black">
          Start 14 Days Free Trial
        </Button>
      </div>
      <div className="flex md:flex-row items-center justify-between pt-20">
        <div className="flex flex-col gap-6">
          <Title text="Company" fontSize="lg" />
          <div className="flex flex-col gap-2">
            <a href="#">About</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Help" fontSize="lg" />
          <div className="flex flex-col gap-2">
            <a href="#">Customer Support</a>
            <a href="#">Delivery Details</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Resources" fontSize="lg" />
          <div className="flex flex-col gap-2">
            <a href="#">Free eBooks</a>
            <a href="#">Development Tutorial</a>
            <a href="#">How to - Blog</a>
            <a href="#">Youtube Playlist</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Title text="Links" fontSize="lg" />
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
