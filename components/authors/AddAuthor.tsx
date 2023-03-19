import Input from "../common/Input";

const AddAuthor = () => {
  return (
    <div className='m-4'>
      <div>
        <div>Author name</div>
        <Input className=' border-amber-300 p-2 my-2 rounded-md w-96' placeholder='Enter author name' />
      </div>
    </div>
  );
};

export default AddAuthor;
