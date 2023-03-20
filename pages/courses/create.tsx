import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Title from "../../components/common/Title";
import Select from "react-select";
import { trpc } from "../../server/trpc";
import { format } from "date-fns";

const CreateCourse = () => {
  const ctx = trpc.useContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Course>();
  const mutation = trpc.course.createCourse.useMutation();
  const onSubmit: SubmitHandler<Course> = (data) => {
    const creationDate = format(new Date(), "yyyy-MM-dd");
    mutation.mutateAsync(
      { ...data, creationDate },
      {
        onSuccess: (_: Course) => {
          ctx.course.courses.invalidate();
        },
      }
    );
  };

  const authorOptions = trpc.author.authors.useQuery().data?.map((author: Author) => {
    return { value: author.id, label: author.name };
  });

  return (
    <div className='border-solid border-2 border-indigo-500 m-4'>
      <Title>Create Course</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between items-center m-4'>
          <div>
            <div>Title</div>
            <Input className='h-8 border-amber-300 rounded-md' {...register("title", { required: true })} />
            <div>{errors.title && <span className='mx-1 text-red-500'>Required</span>}</div>
          </div>
          <div>
            <Button className='mr-4 w-40 border-2 border-solid p-1  border-purple-700'>Create Course</Button>
          </div>
        </div>
        <div className='m-4'>
          <div>Duration</div>
          <Input
            type='number'
            className='h-8 border-amber-300 rounded-md'
            {...register("duration", { required: true, valueAsNumber: true })}
          />
          <div>{errors.duration && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div>Authors</div>
          <Controller
            control={control}
            defaultValue={[]}
            name='authors'
            rules={{ required: true }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                value={authorOptions?.filter((c) => value.includes(c.value))}
                onChange={(val) => onChange(val.map((c) => c.value))}
                options={authorOptions}
                isMulti
                className='border-2 border-solid border-amber-300 w-1/2'
              />
            )}
          />
          <div>{errors.authors && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
        <div className='m-4'>
          <div>Description</div>
          <textarea
            rows={4}
            className='block p-2.5 w-full rounded-md border-solid border-2 border-amber-300'
            {...register("description", { required: true })}
          ></textarea>
          <div>{errors.description && <span className='mx-1 text-red-500'>Required</span>}</div>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
