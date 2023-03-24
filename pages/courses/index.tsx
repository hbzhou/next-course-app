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
      <div className='flex justify-between m-4 '>
        <SearchBar handleSearch={handleSearch} />
        <Button className=' border-purple-500 w-56 max-h-10 min-w-fit' onClick={() => router.push("/courses/create")}>
          Add new course
        </Button>
      </div>
      {courses?.map((course) => {
        return <CourseCard key={course.id} {...course} />;
      })}
    </div>
  );
};

export default Courses;
