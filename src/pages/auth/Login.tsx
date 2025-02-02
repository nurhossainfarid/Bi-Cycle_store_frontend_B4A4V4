/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import Image7 from "../../images/login7.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const defaultValues = {
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
        className=" w-96 rounded-md shadow-md relative top-1/3 left-40"
        style={{
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <h1 style={{ marginBottom: "10px" }}>Login</h1>
          <PHInput type="text" name="email" label="Email:" />
          <div className="relative">
            <PHInput
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password:"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 top-1/2 flex items-center text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Don't have an account?
              <a
                href="/register"
                className="text-blue-500 hover:underline ml-1"
              >
                Create One
              </a>
            </p>
          </div>
        </PHForm>
      </div>
    </div>
  );
};

export default Login;
