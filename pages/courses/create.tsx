import { format } from "date-fns";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container, Form, Label } from "semantic-ui-react";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";
import { trpc } from "../../server/trpc";

const CreateCourse = () => {
  const ctx = trpc.useContext();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<Course>();
  const router = useRouter();
  const mutation = trpc.course.createCourse.useMutation();
  const onSubmit: SubmitHandler<Course> = (data) => {
    console.log(data);
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

  const authorOptions =
    trpc.author.authors.useQuery().data?.map((author: Author) => {
      return { text: author.name, value: author.id };
    }) || [];

  return (
    <Container className='!w-2/5 p-4'>
      <Title>Create Course</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Title</label>
          <input placeholder='Enter title' {...register("title", { required: true })} />
          <div>
            {errors.title && (
              <Label basic color='red' pointing='above'>
                Required
              </Label>
            )}
          </div>
        </Form.Field>
        <Form.Field>
          <label>Duration</label>
          <input type='number' placeholder='Enter duration' {...register("duration", { required: true, valueAsNumber: true })} />
          <div>
            {errors.duration && (
              <Label basic color='red' pointing='above'>
                Required
              </Label>
            )}
          </div>
        </Form.Field>
        <Form.Field>
          <label>Authors</label>
          <Form.Dropdown
            fluid
            multiple
            selection
            placeholder='Enter Authors'
            options={authorOptions}
            {...register("authors", { required: true })}
            onChange={async (e, { name, value }) => {
              setValue(name, value);
              await trigger("authors");
            }}
          />
          <div>
            {errors.authors && (
              <Label basic color='red' pointing='above'>
                Required
              </Label>
            )}
          </div>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea rows={4} className='w-full' {...register("description", { required: true })} />
          <div>
            {errors.description && (
              <Label basic color='red' pointing='above'>
                Required
              </Label>
            )}
          </div>
        </Form.Field>
        <div>
          <Button color='linkedin'>Create Course</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CreateCourse;
