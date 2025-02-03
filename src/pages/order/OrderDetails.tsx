import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { useGetOrdersQuery } from "@/redux/features/order/order";
import {
  useGetAllUserQuery,
  useGetUserByEmailQuery,
} from "@/redux/features/userManagement/users";
import { useAppSelector } from "@/redux/hooks/hooks";
import { verifyToken } from "@/utils/verifyToken";
export interface Transaction {
  id: string;
  transactionStatus: string | null;
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
}

export interface Bicycle {
  bicycle: string;
  quantity: number;
  _id: string;
}

export interface Order {
  transaction: Transaction;
  _id: string;
  user: string;
  bicycles: Bicycle[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function OrderDetails() {
  const user = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetUserByEmailQuery(user?.email);

  const { isLoading, data } = useGetOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const orderData: Order[] = data?.data.filter((order: Order) => order.user === userData?.data?._id);

  return isLoading ? (
    <Skeleton />
  ) : (
    <div className="mx-auto p-10 columns-1 divide-y divide-x">
      {orderData?.map((order) => (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Customer Information</h3>
            <p>User ID: {order?.user}</p>
            <p>Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
            <p>Last Updated: {new Date(order?.updatedAt).toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Order Summary</h3>
            <p>Total Price: ${order?.totalPrice?.toFixed(2)}</p>
            <p>
              Status:{" "}
              <Badge
                variant={order?.status === "Pending" ? "outline" : "default"}
              >
                {order?.status}
              </Badge>
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Bicycles</h3>
            <ul>
              {order?.bicycles?.map((bicycle, i) => (
                <li key={i}>
                  Bicycle ID: {bicycle?.bicycle}, Quantity: {bicycle?.quantity}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="font-semibold">Transaction Details</h3>
            <p>Transaction ID: {order?.transaction?.id}</p>
            <p>Payment Method: {order?.transaction?.method}</p>
            <p>Transaction Date: {order?.transaction?.date_time}</p>
            <p>Transaction Status: {order?.transaction?.bank_status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
