/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "@/components/form/PHForm";
import PHInput from "@/components/form/PHInput";
import Image1 from "../../images/login1.jpg";
import Image2 from "../../images/login2.jpg";
import Image3 from "../../images/login3.jpg";
import Image4 from "../../images/login4.jpeg";
import Image5 from "../../images/login5.jpeg";
import Image6 from "../../images/login6.jpeg";
import Image7 from "../../images/login7.png";

const Login = () => {
  const navigate = useNavigate();

  const defaultValues = {
    userId: "A-0001",
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
          <PHInput type="text" name="userId" label="Email:" />
          <PHInput type="text" name="password" label="Password" />
        </PHForm>
      </div>
    </div>
  );
};

export default Login;
