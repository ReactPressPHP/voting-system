interface InputProps {
  placeholder: string;
  type: string;
  label?: string;
  name?: string;
}

const Input = (props: InputProps) => {
  const { placeholder, type, label, name } = props;
  return (
    <div className="   form-control w-full max-w-xl">
      <label className="label flex flex-col justify-start text-blue-950 gap-2 items-start">
        <p className="label-text  ">{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full max-w-xl"
          name={name}
        />
      </label>
    </div>
  );
};

export default Input;
