// Dashboard.js
import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar>
        <SidebarLink
          text="Manage Orders"
          icon="🛒"
          onClick={() => setActiveTab("orders")}
          isActive={activeTab === "orders"}
        />
        <SidebarLink
          text="Manage Products"
          icon="📦"
          onClick={() => setActiveTab("products")}
          isActive={activeTab === "products"}
        />
        <SidebarLink
          text="Profile"
          icon="👤"
          onClick={() => setActiveTab("profile")}
          isActive={activeTab === "profile"}
        />
      </Sidebar> */}

      {/* Main content area */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

        {/* Orders Section */}
        {activeTab === "orders" && (
          <div>
            <h3 className="text-xl">Manage Orders</h3>
            {/* Add your order management table or other components */}
            <div className="border-t mt-4">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">#12345</td>
                    <td className="px-4 py-2">John Doe</td>
                    <td className="px-4 py-2">Shipped</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">#12346</td>
                    <td className="px-4 py-2">Jane Smith</td>
                    <td className="px-4 py-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Products Section */}
        {activeTab === "products" && (
          <div>
            <h3 className="text-xl">Manage Products</h3>
            <div className="border-t mt-4">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product ID</th>
                    <th className="px-4 py-2">Product Name</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">#98765</td>
                    <td className="px-4 py-2">Laptop</td>
                    <td className="px-4 py-2">$899.99</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">#98766</td>
                    <td className="px-4 py-2">Smartphone</td>
                    <td className="px-4 py-2">$499.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Profile Section */}
        {activeTab === "profile" && (
          <div>
            <h3 className="text-xl">Your Profile</h3>
            <div className="mt-4 p-4 bg-gray-100">
              <p className="mb-2 font-semibold">Name: John Doe</p>
              <p className="mb-2 font-semibold">Email: john.doe@example.com</p>
              <p className="mb-2 font-semibold">Role: Admin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
