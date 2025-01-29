import { themeHandler } from "@/utils/themeHandler";
import { useTheme } from "@/providers/theme-provider";
import Banner from "./Banner";
import Products from "./Products";
const Home = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });

  return (
    <div className="flex flex-col gap-20 items-center justify-center my-5">
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
