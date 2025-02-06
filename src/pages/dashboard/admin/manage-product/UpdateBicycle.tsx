/* eslint-disable @typescript-eslint/no-unused-vars */
import CZCheckbox from "@/components/form/CZCheckbox";
import CZForm from "@/components/form/CZForm";
import CZInput from "@/components/form/CZInput";
import { Separator } from "@/components/ui/separator";
import { useUpdateBicycleMutation } from "@/redux/features/bicycleManagement/bicycle";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";

const UpdateBicycle = ({ id, bicycle }) => {
  const { reset, setValue } = useForm();
  const [updateBicycle] = useUpdateBicycleMutation();

  useEffect(() => {
    if (bicycle) {
      Object.keys(bicycle).forEach((key) => {
        setValue(key, bicycle[key]);
      });
    }
  }, [bicycle, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating bicycle...");

    try {
      const bicycleData = {
        ...data,
        wheel: {
          ...data.wheel,
          size: Number(data.wheel.size),
        },
        gear: {
          ...data.gear,
          number_of_gears: Number(data.gear.number_of_gears),
        },
        price: Number(data.price),
        quantity: Number(data.quantity),
        inStock: data.quantity > 0,
      };

      console.log("Updated Bicycle Data:", bicycleData);

      const res = await updateBicycle({ id, data: bicycleData }).unwrap();
      console.log("Response:", res);

      toast.success("Bicycle updated successfully!", { id: toastId });
      reset();
    } catch (error) {
      toast.error("Failed to update bicycle", { id: toastId });
    }
  };

  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold text-center">Update Bicycle</h1>
      <CZForm onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="space-y-4">
            <h2 className="md:text-xl font-bold">General Info</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="text" name="name" label="Bicycle Name" />
              <CZInput type="text" name="brand" label="Brand" />
              <CZInput type="text" name="model" label="Model" />
              <CZInput name="description" label="Description" type="textarea" />
              <CZInput name="type" label="Type" type="text" />
              <CZInput type="text" name="weight" label="Weight (kg)" />
              <CZInput name="price" label="Price ($)" type="number" />
              <CZInput name="quantity" label="Quantity" type="number" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Frame Details</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput
                name="frame.material"
                label="Frame Material"
                type="text"
              />
              <CZInput name="frame.size" label="Frame size(cm)" type="text" />
              <CZInput name="frame.color" label="Frame Color" type="text" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Wheel Details & Gear Details</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZInput type="number" name="wheel.size" label="Wheel Size" />
              <CZInput
                type="text"
                name="wheel.rim_material"
                label="Rim Material"
              />
              <CZInput name="wheel.tire_type" label="Tire Type" type="text" />
              <CZInput type="text" name="gear.shifters" label="Shifters" />
              <CZInput
                type="text"
                name="gear.derailleurs.front"
                label="Front Derailleur"
              />
              <CZInput
                type="text"
                name="gear.derailleurs.rear"
                label="Rear Derailleur"
              />
              <CZInput
                type="number"
                name="gear.number_of_gears"
                label="Number of Gears"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Accessories</h2>
            <Separator className="bg-gray-500" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <CZCheckbox name="accessories.bell" label="Bell" />
              <CZCheckbox name="accessories.kickstand" label="Kickstand" />
              <CZCheckbox name="accessories.rear_rack" label="Rear Rack" />
              <CZCheckbox name="accessories.fenders" label="Fenders" />
              <CZCheckbox name="accessories.lights.front" label="Front Light" />
              <CZCheckbox name="accessories.lights.rear" label="Rear Light" />
            </div>
          </div>
        </div>
      </CZForm>
    </div>
  );
};

export default UpdateBicycle;
