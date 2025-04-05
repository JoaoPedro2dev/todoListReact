function Input(props) {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="py-2 px-3 rounded-md border border-slate-300 outline-slate-400"
        {...props}
      />
    </div>
  );
}

export default Input;
