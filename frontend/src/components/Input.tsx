interface InputProps {
  placeholder: string;
  type: string;
  label?: string;
  name?: string;
}

const Input = (props: InputProps) => {
  const { placeholder, type, label, name } = props;
  return (
    <div className="form-control w-full">
      <label className="label flex flex-col justify-start text-blue-950 gap-1 items-start">
        <p className="label-text">{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
          name={name}
        />
      </label>
    </div>
  );
};

export default Input;
