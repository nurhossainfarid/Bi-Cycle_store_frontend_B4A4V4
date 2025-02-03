import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import {
  useDeleteBicycleMutation,
  useGetAllBicyclesQuery,
} from "@/redux/features/bicycleManagement/bicycle";
import { toast } from "sonner";

const Bicycles = () => {
  const { data: bicyclesData } = useGetAllBicyclesQuery(undefined);
  const [deleteBicycle] = useDeleteBicycleMutation();
  const data = bicyclesData?.data?.map(
    ({ _id, name, model, brand, quantity, price }) => ({
      bicycleId: _id,
      name,
      model,
      brand,
      quantity,
      price,
    })
  );

  const handleDelete = async (bicycleId: string) => {
    try {
      await deleteBicycle(bicycleId).unwrap();
      toast.success("Bicycle deleted successfully");
    } catch (error) {
      toast.error("Failed to delete bicycle");
    }
  };

  return (
    <div className="p-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.bicycleId}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.model}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link to={`/bicycle-details/${item.bicycleId}`}>
                    <Button variant="outline">Detail</Button>
                  </Link>
                  <Button variant="outline">Update</Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(item.bicycleId)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Bicycles;
