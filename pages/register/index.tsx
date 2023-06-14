import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Title from "../../components/common/Title";
import { Form } from "semantic-ui-react";
import prisma from "../../db/PrismaClient";
import { trpc } from "../../server/trpc";
import { useRouter } from "next/router";

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

  const mutation = trpc.user.createUser.useMutation();
  const router = useRouter();

  const onSubmit = (user: User) => {
    mutation.mutate(
      { ...user },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };

  return (
    <div className='flex'>
      <Form onSubmit={handleSubmit(onSubmit)} className='m-auto w-1/4'>
        <Title>Registration</Title>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Enter name' {...register("name", { required: true })} />
          {errors.name && <Label>Required</Label>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type='email' placeholder='Enter email' {...register("email", { required: true })} />
          {errors.email && <Label>Required</Label>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Enter password' {...register("password", { required: true })} />
          {errors.password && <Label>Required</Label>}
        </Form.Field>
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
      </Form>
    </div>
  );
};

export default Registration;
