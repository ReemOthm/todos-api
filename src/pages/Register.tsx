import InputErrorMessage from "../components/InputErrorMessage";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm , SubmitHandler } from 'react-hook-form'
import { RegisterForm } from "../data";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../validation";
import axiosInstance from "../config/axios.config";
import toast from 'react-hot-toast';
import { IErrorResponse, IFormInput } from "../interfaces";
import { useState } from "react";
import { AxiosError } from "axios";

const RegisterPage = () => {
    
  // ----------------STATES-----------------
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
  })
  const onSubmit:SubmitHandler<IFormInput> = async(data) =>{
    console.log(data)

    setIsLoading(true);
    
    try{
      const {status} = await axiosInstance.post("/auth/local/register",data)
      
      if(status === 200){
        toast.success("You will navugate to the login page after 4 seconds", {
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
  const RegisterFormRender = RegisterForm.map(({type, placeholder, name, validation},index)=> 
    <div key={index}>
      <Input type={type} placeholder={placeholder}  {...register(name ,validation)}/>
      {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
  </div>
  )

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">Register to get access!</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {RegisterFormRender}
        <Button fullWidth isLoading={isLoading}>
        Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
