import React from "react";
import Divider from "./Divider";
import Button from "./Button";
interface Props {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-2xl'>{title}</h3>
          <Divider />
          <div>{children}</div>
          <Divider />
          <div className='modal-action'>
            <label htmlFor='my-modal' className='btn bg-red-500'>
              Cancel
            </label>
            <label htmlFor='my-modal' className='btn'>
              <button>Confirm</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
