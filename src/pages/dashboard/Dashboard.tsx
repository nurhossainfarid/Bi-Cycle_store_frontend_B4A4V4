import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { JwtPayload } from "jsonwebtoken";
import { AppSidebar } from "./AppSidebar";
import CreateBicycle from "./admin/manage-product/CreateBicycle";
import Orders from "./admin/manage-order/Orders";
import Users from "./admin/manage-user/Users";
import Bicycles from "./admin/manage-product/Bicycles";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import ProfileSetting from "./admin/manage-user/ProfileSetting";

const Dashboard = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  const [activeTab, setActiveTab] = useState(
    `${
      (user?.role === "admin" && "create-bicycle") ||
      (user?.role === "customer" && "orders")
    }`
  );

  return (
    <SidebarProvider className="bg-gray-900 text-white relative">
      <AppSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        role={user?.role}
      />
      <div className="flex-1">
        {activeTab === "create-bicycle" && <CreateBicycle />}
        {activeTab === "bicycles" && <Bicycles />}
        {activeTab === "users" && <Users />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "profile-setting" && <ProfileSetting />}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
