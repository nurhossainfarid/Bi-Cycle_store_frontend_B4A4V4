import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLinkWithDropdown from "./SidebarLinkWithDropdown";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function AppSidebar({ activeTab, setActiveTab }: AppSidebarProps) {
  const role: "user" | "admin" = "admin";
  const userSubLinks = [
    { text: "Create User", onClick: () => setActiveTab("create-user") },
    { text: "Users", onClick: () => setActiveTab("users") },
    { text: "Update User", onClick: () => setActiveTab("update-user") },
  ];
  const productSubLinks = [
    { text: "Add Product", onClick: () => setActiveTab("add-product") },
    { text: "View Products", onClick: () => setActiveTab("view-products") },
    { text: "Update Product", onClick: () => setActiveTab("update-product") },
  ];

  // Define sub-links for "Manage Orders"
  const orderSubLinks = [
    { text: "View Orders", onClick: () => setActiveTab("view-orders") },
    { text: "Pending Orders", onClick: () => setActiveTab("pending-orders") },
    {
      text: "Completed Orders",
      onClick: () => setActiveTab("completed-orders"),
    },
  ];

  return (
    <Sidebar className="w-64 bg-gray-900 text-white h-100 mt-20">
      <SidebarHeader className="text-xl font-bold p-4">
        {role} Dashboard
      </SidebarHeader>
      {role === "admin" && (
        <SidebarContent>
          <SidebarLinkWithDropdown
            text="Manage Users"
            icon="👤"
            subLinks={userSubLinks}
            isActive={
              activeTab === "create-user" ||
              activeTab === "view-users" ||
              activeTab === "update-user"
            }
            onClick={() => {}}
          />
          <SidebarLinkWithDropdown
            text="Manage Products"
            icon="📦"
            subLinks={productSubLinks}
            isActive={
              activeTab === "add-product" ||
              activeTab === "view-products" ||
              activeTab === "update-product"
            }
            onClick={() => {}}
          />
          <SidebarLinkWithDropdown
            text="Manage Orders"
            icon="🛒"
            subLinks={orderSubLinks}
            isActive={
              activeTab === "view-orders" ||
              activeTab === "pending-orders" ||
              activeTab === "completed-orders"
            }
            onClick={() => {}}
          />
        </SidebarContent>
      )}
      {role === "user" && (
        <SidebarContent>
          <SidebarLink
            text="Orders"
            icon="📦"
            onClick={() => setActiveTab("orders")}
            isActive={activeTab === "orders"}
          />
        </SidebarContent>
      )}
      <SidebarFooter>
        <SidebarLink
          text="Profile"
          icon="👤"
          onClick={() => setActiveTab("profile")}
          isActive={activeTab === "profile"}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
