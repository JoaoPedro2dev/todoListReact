import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import { useState } from "react";
import Title from "../components/titles/Titles";

function EditarPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = useState(searchParams.get("title"));
  const [text, setText] = useState(searchParams.get("text"));
  const tarefas = JSON.parse(localStorage.getItem("tasks"));

  console.log(tarefas);
  console.log(id);

  function editarTarefa(id, title, description) {
    if (!title || !description) {
      alert("Preencha os campos corretamente");

      return;
    }

    tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.title = title;
        tarefa.text = description;
      } else {
        console.log("item não encontrado");
      }
    });

    localStorage.setItem("tasks", JSON.stringify(tarefas));
    alert("Trefa editada com sucesso!");
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-500">
      <div className="flex justify-center items-center relative w-[500px] mb-5">
        <button
          className="absolute left-0 p-2 bg-slate-300 text-slate-50 rounded-md"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon />
        </button>
        <Title>Editar Produto</Title>
      </div>

      <div className="w-[500px] bg-slate-400 rounded-md p-6 space-y-3">
        <div className="flex flex-col space-y-1">
          <label htmlFor="">Nome da tarefa</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md border border-slate-300 "
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="">Nome da tarefa</label>
          <input
            type="text"
            className="py-1 px-2 rounded-md border border-slate-300 "
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <button
          className="bg-slate-500 p-3 w-full rounded-md text-slate-50"
          onClick={() => {
            editarTarefa(id, title, text);
          }}
        >
          salvar
        </button>
      </div>
    </div>
  );
}

export default EditarPage;
