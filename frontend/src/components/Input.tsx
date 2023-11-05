import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input = (props: InputProps) => {
  const { placeholder, type } = props;
  return (
    <div className="form-control w-full max-w-xl">
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xl"
      />
    </div>
  );
};

export default Input;
