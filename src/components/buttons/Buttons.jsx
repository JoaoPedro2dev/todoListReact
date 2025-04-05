function Button(props) {
  return (
    <button
      className="bg-slate-400 text-white p-3 rounded-md"
      onClick={props.funcao}
    >
      {props.children}
    </button>
  );
}

export default Button;
