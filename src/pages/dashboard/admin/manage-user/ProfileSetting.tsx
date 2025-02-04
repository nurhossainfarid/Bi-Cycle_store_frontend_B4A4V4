import CZCheckbox from "@/components/form/CZCheckbox";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import CZSelect from "@/components/form/CZSelect";
import { Button } from "@/components/ui/button";
import { SelectSeparator } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const ProfileSetting = () => {
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
    <div className="bg-white">
      <h1 className="text-3xl font-bold text-center">Profile Setting</h1>
      <CZForm onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="space-y-4">
            <h2 className="md:text-xl font-bold">General Info</h2>
            <SelectSeparator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="email" name="email" label="Email" />
              <CZInput type="text" name="name" label="Name" />
              <CZInput type="password" name="password" label="New Password" />
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
              <CZInput type="date" name="dateOfBirth" label="Date of Birth" />
              <CZInput type="text" name="contactNo" label="Contact No" />
              <CZSelect
                name="bloodGroup"
                label="Blood Group"
                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                  (group) => ({ value: group, label: group })
                )}
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
              <CZInput type="file" name="profileImg" label="Profile Image" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Settings</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Button variant={"outline"} className="hover:text-white">
                Change Password
              </Button>
              <Button variant={"outline"} className="hover:text-white">
                Block
              </Button>
              <Button
                variant={"outline"}
                className="hover:text-white bg-red-500"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </CZForm>
    </div>
  );
};

export default ProfileSetting;
