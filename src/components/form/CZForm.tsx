import { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
  Resolver,
} from "react-hook-form";
import { Button } from "../ui/button";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: Resolver<Record<string, unknown>>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const CZForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="rounded-md">
        {children}
        <Button type="submit" className="w-full mt-4 text-white">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default CZForm;
