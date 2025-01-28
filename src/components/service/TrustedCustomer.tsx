import { logoOptions } from "@/constants";
import Title from "../ui/title";

const TrustedCustomer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Title text="Trusted by nearly 5000+ paying customers" fontSize="xl" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-16">
        {logoOptions.map((logo) => (
          <img key={logo} src={logo} alt="logo" className="opacity-50" />
        ))}
      </div>
    </div>
  );
};

export default TrustedCustomer;
