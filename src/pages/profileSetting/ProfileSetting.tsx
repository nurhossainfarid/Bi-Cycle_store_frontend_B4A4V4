import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InfoIcon, LogOutIcon, MapPin, User } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import SidebarLink from "../dashboard/SidebarLink";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import MyProfile from "./MyProfile";

const ProfileSetting = () => {
  const [activeTab, setActiveTab] = useState("my-profile");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <div className="pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 my-5 md:pt-2">
        {/* Profile Sidebar */}
        <div className="bg-[#170f21] px-5 py-10 w-full md:w-[450px] rounded-md">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-1">
              <Avatar className="w-28 h-full border-4 border-bright-royal-blue p-1">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="md:text-xl font-outfit mt-2">Nur Hossain Farid</h1>
              <p className="font-inter text-sm opacity-80">
                faahsan1516@gmail.com
              </p>
              <p className="font-inter text-sm opacity-80">+8801841268946</p>
            </div>
            <div className="flex flex-col gap-2">
              <Progress value={80} className="h-2" />
              <div className="flex gap-5 justify-between">
                <p className="font-inter text-sm">Complete your profile</p>
                <p className="font-inter text-sm">80%</p>
              </div>
            </div>
            <Separator className="h-[2px] border-t-2 border-dotted border-vivid-amethyst" />
            <div className="flex flex-col gap-5">
              <SidebarLink
                icon={<User />}
                text="My Profile"
                onClick={() => setActiveTab("my-profile")}
                isActive={activeTab === "my-profile"}
              />
              <SidebarLink
                icon={<MapPin />}
                text="Address"
                onClick={() => setActiveTab("address")}
                isActive={activeTab === "address"}
              />
              <SidebarLink
                icon={<LogOutIcon />}
                text="Logout"
                onClick={handleLogout}
              />
            </div>
            <div className="flex gap-5">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Deactivated
              </Button>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-full bg-[#170f21] p-8 rounded-md">
          {activeTab === "my-profile" && <MyProfile />}
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
