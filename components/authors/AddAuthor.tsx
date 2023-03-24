import { UseFormRegister } from "react-hook-form";
import Input from "../common/Input";

interface Props {
  register: UseFormRegister<Author>;
}

const AddAuthor: React.FC<Props> = ({ register }) => {
  return (
    <div className='m-4'>
      <div>
        <div>Author name</div>
        <Input
          className=' border-amber-300 p-2 my-2 rounded-md w-96'
          placeholder='Enter author name'
          {...register("name", { required: true })}
        />
      </div>
    </div>
  );
};

export default AddAuthor;
