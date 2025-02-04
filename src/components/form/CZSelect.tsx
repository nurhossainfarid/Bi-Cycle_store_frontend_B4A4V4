/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

const CZSelect = ({ label, name, options, disabled = false, control }: { label: string; name: string; options: Option[]; disabled?: boolean; control: any }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              disabled={disabled}
              defaultValue={field.value}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option: Option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CZSelect;
