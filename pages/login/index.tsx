import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Title from "../../components/common/Title";

interface LoginRequest {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit = (request: LoginRequest) => {};

  return (
    <div className='flex'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto w-1/4'>
        <Title>Login</Title>
        <div className='my-2'>
          <Label>Email</Label>
          <div>
            <Input placeholder='Enter email' {...register("email", { required: true })} />
            {errors.email && <span className=' text-red-500'>Required</span>}
          </div>
        </div>
        <div className='my-2'>
          <Label>Password</Label>
          <div>
            <Input type='password' placeholder='Enter password' {...register("password", { required: true })} />
            {errors.password && <span className=' text-red-500'>Required</span>}
          </div>
          <div className='my-4 text-center'>
            <Button color='facebook' size='big'>
              Login
            </Button>
          </div>
          <p className='font-sans text-xl'>
            If you don &apos;t have an account you can{" "}
            <Link className=' text-blue-500 my-2' href='/register'>
              register
            </Link>
            {""} here.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
