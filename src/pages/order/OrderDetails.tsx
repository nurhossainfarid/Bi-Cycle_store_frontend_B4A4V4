import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useGetOrdersQuery } from "@/redux/features/order/order";

const Orders = () => {
  const { data: orderData } = useGetOrdersQuery(undefined);
  const data = orderData?.data?.map(
    ({ _id, transaction, totalPrice, status, createdAt }: { _id: string, transaction: { id: string, method: string, bank_status: string }, totalPrice: number, status: string, createdAt: string }) => ({
      orderId: _id,
      transactionId: transaction.id,
      paymentMethod: transaction.method,
      bankStatus: transaction.bank_status,
      totalPrice,
      status,
      createdAt,
    })
  );

  return (
    <div className="p-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Bank Status</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item.orderId}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.transactionId}</TableCell>
              <TableCell>{item.paymentMethod}</TableCell>
              <TableCell>{item.bankStatus}</TableCell>
              <TableCell>${item.totalPrice.toFixed(2)}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Orders;
