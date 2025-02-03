import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import CreateBicycle from "./admin/manage-product/CreateBicycle";
import Orders from "./admin/manage-order/Orders";
import Users from "./admin/manage-user/Users";
import Bicycles from "./admin/manage-product/Bicycles";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("create-bicycle");

  return (
    <SidebarProvider className="bg-gray-900 text-white relative">
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">
        {activeTab === "create-bicycle" && <CreateBicycle />}
        {activeTab === "bicycles" && <Bicycles />}
        {activeTab === "users" && <Users />}
        {activeTab === "orders" && <Orders />}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
