import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import CZSelect from "@/components/form/CZSelect";
import { Button } from "@/components/ui/button";
import { SelectSeparator } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EditIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ProfileSetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    password: "",
    needsPasswordChange: false,
    role: "customer",
    gender: "",
    dateOfBirth: "",
    contactNo: "",
    bloodGroup: "",
    presentAddress: "",
    permanentAddress: "",
    profileImg: "",
    isBlocked: false,
    isDeleted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile({
      ...profile,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", profile);
  };

  return (
    <div className="pb-5 md:pb-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 my-5 md:pt-2">
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
            <div className="flex gap-5">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
            </div>
          </div>
        </div>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="space-y-2 w-full"
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="md:text-xl font-bold">My Profile</h2>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="border-none">
                <EditIcon /> Edit Profile
              </Button>
            </CollapsibleTrigger>
          </div>
          <div>
            <h1>Farid</h1>
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="w-full">
              <CZForm onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 md:gap-5">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <CZInput type="email" name="email" label="Email" />
                      <CZInput type="text" name="name" label="Name" />
                      <CZInput
                        type="password"
                        name="password"
                        label="New Password"
                      />
                      <CZSelect
                        name="role"
                        label="Role"
                        options={[
                          { value: "admin", label: "Admin" },
                          { value: "customer", label: "Customer" },
                        ]}
                      />
                      <CZSelect
                        name="gender"
                        label="Gender"
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" },
                          { value: "others", label: "Others" },
                        ]}
                      />
                      <CZInput
                        type="date"
                        name="dateOfBirth"
                        label="Date of Birth"
                      />
                      <CZInput
                        type="text"
                        name="contactNo"
                        label="Contact No"
                      />
                      <CZSelect
                        name="bloodGroup"
                        label="Blood Group"
                        options={[
                          "A+",
                          "A-",
                          "B+",
                          "B-",
                          "AB+",
                          "AB-",
                          "O+",
                          "O-",
                        ].map((group) => ({ value: group, label: group }))}
                      />
                      <CZInput
                        type="text"
                        name="presentAddress"
                        label="Present Address"
                      />
                      <CZInput
                        type="text"
                        name="permanentAddress"
                        label="Permanent Address"
                      />
                      <CZInput
                        type="file"
                        name="profileImg"
                        label="Profile Image"
                      />
                    </div>
                  </div>
                </div>
              </CZForm>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default ProfileSetting;
