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
    <div className='border-solid border-2 border-indigo-500 m-4'>
      <Title>Create Course</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center m-4'>
          <div>
            <div>Title</div>
            <Input {...register("title", { required: true })} />
            <div>{errors.title && <span className='mx-1 text-red-500'>Required</span>}</div>
          </div>
          <div>
            <Button color='violet'>Create Course</Button>
          </div>
        </div>
        <div className='m-4'>
          <div>Duration</div>
          <Input type='number' {...register("duration", { required: true, valueAsNumber: true })} />
          <div>{errors.duration && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div>Authors</div>
          <Dropdown placeholder='Authors' options={authorOptions} />
          <div>{errors.authors && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div>Description</div>
          <TextArea rows={4} className='block p-2.5 w-full' {...register("description", { required: true })} />
          <div>{errors.description && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
