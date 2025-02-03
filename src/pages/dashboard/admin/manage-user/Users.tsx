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
import { toast } from "sonner";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/features/userManagement/users";

const Users = () => {
  const { data: userData } = useGetAllUserQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  const data = userData?.data?.map(({ _id, name, email, role, isBlocked }) => ({
    userId: _id,
    name,
    email,
    role,
    isBlocked,
  }));

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="p-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Is Blocked</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.userId}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.isBlocked ? "Yes" : "No"}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link to={`/bicycle-details/${item.userId}`}>
                    <Button variant="outline">Detail</Button>
                  </Link>
                  <Button variant="outline">Update</Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(item.userId)}
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

export default Users;
