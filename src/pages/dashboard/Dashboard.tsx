import { useState } from "react";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const UserDashboard = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Sidebar */}
        <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Orders Section */}
          {activeTab === "orders" && (
            <div>
              <h3 className="text-xl">Manage Orders</h3>
              {/* Add your order management table or other components */}
            </div>
          )}

          {/* Products Section */}
          {activeTab === "products" && (
            <div>
              <h3 className="text-xl">Manage Products</h3>
              {/* Add your product management table or other components */}
            </div>
          )}

          {/* Profile Section */}
          {activeTab === "profile" && (
            <div>
              <h3 className="text-xl">Your Profile</h3>
              {/* Add your profile information */}
            </div>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default UserDashboard;
