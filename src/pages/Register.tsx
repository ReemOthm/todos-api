import InputErrorMessage from "../components/InputErrorMessage";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm , SubmitHandler } from 'react-hook-form'
import { RegisterForm } from "../data";
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "../validation";

const RegisterPage = () => {

  interface IFormInput {
    username: string,
    email: string,
    password: string
  }

  const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
  })
  const onSubmit:SubmitHandler<IFormInput> = (data) => console.log(data)

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
        <Button fullWidth>Register</Button>
      </form>
    </div>
  );
};

export default RegisterPage;
