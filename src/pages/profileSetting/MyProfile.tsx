import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import CZSelect from "@/components/form/CZSelect";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { EditIcon } from "lucide-react";
import { useState } from "react";
const MyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (data) => {
    console.log("Profile Updated:", data);
  };
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="space-y-2"
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
                  <CZInput type="text" name="contactNo" label="Contact No" />
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
  );
};

export default MyProfile;
