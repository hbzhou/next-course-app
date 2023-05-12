import _ from "lodash";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Container } from "semantic-ui-react";
import Button from "../../components/common/Button";
import CourseCard from "../../components/courses/CourseCard";
import SearchBar from "../../components/courses/SearchBar";
import { trpc } from "../../server/trpc";

const Courses = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const { data: courses } = trpc.course.courses.useQuery();

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  return (
    <Container fluid className='courses m-auto'>
      <div className='flex justify-between m-4'>
        <SearchBar handleSearch={handleSearch} />
        <Button color='linkedin' onClick={() => router.push("/courses/create")}>
          Add new course
        </Button>
      </div>
      <div className='flex gap-10 mx-4 flex-wrap'>
        {courses?.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </Container>
  );
};

export default Courses;
