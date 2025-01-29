import { themeHandler } from "@/utils/themeHandler";
import { useTheme } from "@/providers/theme-provider";
import Carousel from "@/components/header/Carousel";
const Home = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Carousel />
    </div>
  );
};

export default Home;
