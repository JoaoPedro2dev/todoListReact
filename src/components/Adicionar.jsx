import Input from "./inputs/Inputs.jsx";
import { useState } from "react";

function Adicionar({ adicionarTarefa }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-100 space-y-5 rounded-md p-6">
      <Input
        placeholder={"Titulo da tarefa"}
        title={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <Input
        placeholder={"Descrição da tarefa"}
        title={title}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <button
        className="bg-slate-400 text-white p-3 rounded-md w-full"
        onClick={() => {
          adicionarTarefa(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicioar tarefa
      </button>
    </div>
  );
}

export default Adicionar;
