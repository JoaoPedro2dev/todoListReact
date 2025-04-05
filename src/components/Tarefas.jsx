import { ChevronRightIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./buttons/Buttons";
// import Button from "./buttons/Buttons.jsx";

function Tarefas({ tarefas, vericarTarefa, deletarTarefa }) {
  const navigate = useNavigate();

  function paginaDetails(tarefa) {
    const query = new URLSearchParams();
    query.set("title", tarefa.title);
    query.set("text", tarefa.text);
    navigate(`/tasks?${query.toString()}`);
  }

  function paginaEditar(tarefa) {
    const query = new URLSearchParams();
    query.set("id", tarefa.id);
    query.set("title", tarefa.title);
    query.set("text", tarefa.text);
    navigate(`/editar?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
      {tarefas.map((tarefa) => (
        <li key={tarefa.id} className="flex space-x-2">
          <button
            className={`w-full text-left bg-slate-400 text-white p-3 rounded-md ${
              tarefa.completada && "line-through"
            }`}
            onClick={() => vericarTarefa(tarefa.id)}
          >
            {tarefa.title}
          </button>

          <Button
            funcao={() => {
              paginaDetails(tarefa);
            }}
          >
            <ChevronRightIcon />
          </Button>

          <Button
            funcao={() => {
              paginaEditar(tarefa);
            }}
          >
            <PencilIcon />
          </Button>

          <Button
            funcao={() => {
              deletarTarefa(tarefa.id);
            }}
          >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tarefas;
