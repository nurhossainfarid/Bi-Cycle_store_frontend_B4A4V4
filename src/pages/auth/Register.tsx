/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import Image7 from "../../images/login7.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  const defaultValues = {
    name: "Farid",
    email: "farid@example.com",
    password: "farid123",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div
      className="bg-black"
      style={{
        height: "100vh",
        backgroundImage: `url(${Image7})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div
        className=" w-96 rounded-md shadow-md relative top-1/4 left-40"
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <h1 style={{ marginBottom: "10px" }}>Register</h1>
          <PHInput type="text" name="name" label="Name:" />
          <PHInput type="text" name="email" label="Email:" />
          <div className="relative">
            <PHInput type="text" name="password" label="Password:" />
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </PHForm>
      </div>
    </div>
  );
};

export default Register;
