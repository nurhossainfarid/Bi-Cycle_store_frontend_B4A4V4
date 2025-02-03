import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarLink from "./SidebarLink";
import SidebarLinkWithDropdown from "./CollapsibleMenu";
import CollapsibleMenu from "./CollapsibleMenu";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const sidebarItems = [
  {
    title: "View Order",
    value: "view-order",
  },
  {
    title: "Profile Setting",
    value: "profile-setting",
  },
];

export function AppSidebar({ activeTab, setActiveTab }: AppSidebarProps) {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

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
    <Sidebar className="w-64 h-[100%] bg-gray-900 text-white bg-inherit absolute">
      <SidebarContent>
        <SidebarHeader className="text-xl font-bold p-4 uppercase">
          {user?.role} Dashboard
        </SidebarHeader>
        {/* Sidebar Group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Collapsible Menu */}
              <CollapsibleMenu
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {/* Regular Menu Items */}
              {sidebarItems.map((item) => (
                <SidebarLink
                  text={item.title}
                  onClick={() => setActiveTab(item.value)}
                  isActive={activeTab === item.value}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
