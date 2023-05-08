import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Title from "../../components/common/Title";

interface User {
  name: string;
  email: string;
  password: string;
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    console.log(user);
  };

  return (
    <div className='flex'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto w-1/4'>
        <Title>Registration</Title>
        <div className='my-2'>
          <Label>Name</Label>
          <Input placeholder='Enter name' {...register("name", { required: true })} />
          {errors.name && <div className=' text-red-500'>Required</div>}
        </div>
        <div className='my-2'>
          <Label>Email</Label>
          <Input type='email' placeholder='Enter email' {...register("email", { required: true })} />
          {errors.email && <div className=' text-red-500'>Required</div>}
        </div>
        <div className='my-2'>
          <Label>Password</Label>
          <Input type='password' placeholder='Enter password' {...register("password", { required: true })} />
          {errors.password && <div className=' text-red-500'>Required</div>}
        </div>
        <div className='my-2 text-center'>
          <Button size='big' color='instagram'>
            Registration
          </Button>
        </div>
        <p className='font-sans text-xl'>
          if you already have an account, you can {""}
          <Link href='/login' className=' text-blue-500'>
            Login
          </Link>
          {""} here.
        </p>
      </form>
    </div>
  );
};

export default Registration;
