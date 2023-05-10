import _ from "lodash";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
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
    <div className='courses border-solid border-2 border-green-300 m-4'>
      <div className='flex justify-between m-4'>
        <SearchBar handleSearch={handleSearch} />
        <Button color='violet' onClick={() => router.push("/courses/create")}>
          Add new course
        </Button>
      </div>
      <div className='flex gap-10 mx-4'>
        {courses?.map((course) => {
          return <CourseCard key={course.id} {...course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
