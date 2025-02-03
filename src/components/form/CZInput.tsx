import { Controller } from "react-hook-form";
import { FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const CZInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem>
            {label && <Label htmlFor={name}>{label}</Label>}
            <Input
              {...field}
              type={type}
              id={name}
              size={20}
              className="mt-2"
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </FormItem>
        )}
      />
    </div>
  );
};

export default CZInput;
