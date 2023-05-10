import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Title from "../../components/common/Title";
import Select from "react-select";
import { trpc } from "../../server/trpc";
import { format } from "date-fns";
import { useRouter } from "next/router";
import Dropdown from "../../components/common/Dropdown";
import TextArea from "../../components/common/TextArea";
import { Container } from "semantic-ui-react";

const CreateCourse = () => {
  const ctx = trpc.useContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Course>();
  const router = useRouter();
  const mutation = trpc.course.createCourse.useMutation();
  const onSubmit: SubmitHandler<Course> = (data) => {
    const creationDate = format(new Date(), "yyyy-MM-dd");
    mutation.mutateAsync(
      { ...data, creationDate },
      {
        onSuccess: (_: Course) => {
          ctx.course.courses.invalidate();
          router.push("/courses");
        },
      }
    );
  };

  const authorOptions = trpc.author.authors.useQuery().data?.map((author: Author) => {
    return { key: author.id, text: author.name, value: author.name };
  });

  return (
    <Container>
      <Title>Create Course</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='m-4'>
          <div className='font-sans text-xl'>Title</div>
          <Input {...register("title", { required: true })} />
          <div>{errors.title && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div className='font-sans text-xl'>Duration</div>
          <Input type='number' {...register("duration", { required: true, valueAsNumber: true })} />
          <div>{errors.duration && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div className='font-sans text-xl'>Authors</div>
          <Dropdown placeholder='Authors' options={authorOptions} />
          <div>{errors.authors && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div className='font-sans text-xl'>Description</div>
          <TextArea rows={4} className='block p-2.5 w-full' {...register("description", { required: true })} />
          <div>{errors.description && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <Button color='linkedin'>Create Course</Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateCourse;
