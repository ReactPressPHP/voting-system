export default function Button({ children }) {
  return (
    <button className="text-white btn bg-accent max-w-[9rem] ms-auto">
      {children}
    </button>
  );
}
