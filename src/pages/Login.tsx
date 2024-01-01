import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm , SubmitHandler } from "react-hook-form";
import { IErrorResponse, ILoginInput } from "../interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { LoginForm } from "../data";
import InputErrorMessage from "../components/InputErrorMessage";

const LoginPage = () => {

    // ----------------STATES-----------------
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: {errors} } = useForm<ILoginInput>({
      resolver: yupResolver(loginSchema),
    })
    const onSubmit:SubmitHandler<ILoginInput> = async(data) =>{
      console.log(data)
  
      setIsLoading(true);
      
      try{
        const {status} = await axiosInstance.post("/auth/local",data)
        
        if(status === 200){
          toast.success("Login Successfully!", {
            duration: 4000,
            position: 'bottom-center',
            style: {
              backgroundColor: '#222',
              color: "white",
              width: "fit-content"
            }
          });
        }
      }catch (error){
          const errorObject = error as AxiosError<IErrorResponse>;
          toast.error(`${errorObject.response?.data?.error.message}`, {
            duration: 4000,
            position: 'bottom-center',
          });
      } finally{
        setIsLoading(false);
      }
    }
  
    // -----------------------Renders-------------------
    const LoginFormRender = LoginForm.map(({type, placeholder, name, validation},index)=> 
      <div key={index}>
        <Input type={type} placeholder={placeholder}  {...register(name ,validation)}/>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
    </div>
    )

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">Login to get access!</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {LoginFormRender}
        <Button fullWidth isLoading={isLoading}>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
