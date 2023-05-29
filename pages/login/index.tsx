import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Title from "../../components/common/Title";
import { Form } from "semantic-ui-react";
import Label from "../../components/common/Label";

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

  const onSubmit = (request: LoginRequest) => {
    console.log(request);
  };

  return (
    <div className='flex'>
      <Form onSubmit={handleSubmit(onSubmit)} className='m-auto w-1/4'>
        <Title>Login</Title>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Enter email' {...register("email", { required: true })} />
          {errors.email && <Label>Required</Label>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Enter password' {...register("password", { required: true })} />
          {errors.password && <Label>Required</Label>}
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
        </Form.Field>
      </Form>
    </div>
  );
};

export default Login;
