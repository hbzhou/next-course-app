import { useRouter } from "next/router";
import React from "react";
import { Container, Header, List, Loader } from "semantic-ui-react";
import LabelGroup from "../../components/common/LabelGroup";
import { useAuthorNames, useGetCourse } from "../../service/course.hooks";

const CourseInfo: React.FC = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: course, isLoading } = useGetCourse(id);
  const authors = useAuthorNames(course?.authors);

  if (isLoading || !course) {
    return <Loader active inline='centered' />;
  }

  return (
    <Container text className='my-4'>
      <Header>{course.title}</Header>
      <p>{course.description}</p>
      <List>
        <List.Item>
          <LabelGroup label='ID'>{course.id}</LabelGroup>
        </List.Item>
        <List.Item>
          <LabelGroup label='Duration'>{course.duration} hours</LabelGroup>
        </List.Item>
        <List.Item>
          <LabelGroup label='Created'>{course.creationDate}</LabelGroup>
        </List.Item>
        <List.Item>
          <LabelGroup label='Authors'>
            {authors?.map((author) => {
              return (
                <List key={author} className='!pt-0 px-2'>
                  {author}
                </List>
              );
            })}
          </LabelGroup>
        </List.Item>
      </List>
    </Container>
  );
};

export default CourseInfo;
