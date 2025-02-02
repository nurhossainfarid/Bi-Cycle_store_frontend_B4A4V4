import ProductCard from "@/components/products/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBicyclesQuery } from "@/redux/features/bicycleManagement/bicycle";

const AllBicycle = () => {
  const { data, isLoading } = useGetAllBicyclesQuery(undefined);
  const bicyclesData = data?.data;
  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
          <Skeleton className="h-4 md:h-10 w-[250px] md:w-[500px]" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-10 pt-10">
      <h1 className="font-outfit text-xl md:text-2xl lg:text-4.5xl uppercase font-semibold text-center">
        All Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
        {bicyclesData?.map((bicycle) => (
          <ProductCard key={bicycle.name} bicycle={bicycle} />
        ))}
      </div>
    </div>
  );
};

export default AllBicycle;
