import AuthorTable from "../../components/authors/AuthorTable";
import EditAuthorModal from "../../components/authors/EditAuthorModal";
import Button from "../../components/common/Button";
import { useAuthors } from "../../service/author.hook";

const Authors = () => {
  const { data: authors } = useAuthors();
  return (
    <div className='m-4 flex justify-center'>
      <div className='m-4 w-1/2'>
        <div className='font-bold text-2xl text-center'>Authors</div>
        <div className='flex justify-end my-4'>
          <EditAuthorModal header='Add Author' trigger={<Button color='linkedin'>Add new Author</Button>} />
        </div>
        <AuthorTable authors={authors} />
      </div>
    </div>
  );
};

export default Authors;
