import React, { createRef } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

interface Props {
  handleSearch: (keyword: string) => void;
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {
  const inputRef = createRef<HTMLInputElement>();
  const search = () => {
    handleSearch(inputRef.current?.value ?? "");
  };
  return (
    <div className='flex w-1/2'>
      <Input placeholder='Enter Course Name' className='w-2/4' icon='search' />
      <Button className='w-40 !mx-4' color='linkedin' onClick={search}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
