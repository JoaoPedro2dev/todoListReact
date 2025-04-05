import Adicionar from "./components/Adicionar";
import Tarefas from "./components/Tarefas";
import "./App.css";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Title from "./components/titles/Titles";

function App() {
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  console.log(tarefas);

  function tarefaChecked(idTarefa) {
    const newTarefas = tarefas.map((tarefa) => {
      if (idTarefa === tarefa.id) {
        return { ...tarefa, completada: !tarefa.completada };
      }

      return tarefa;
    });

    setTarefas(newTarefas);
  }

  function deletarTarefa(idTarefa) {
    const newTarefas = tarefas.filter((tarefa) => idTarefa !== tarefa.id);

    setTarefas(newTarefas);
  }

  function adicionarTarefa(title, description) {
    if (!title.trim || !description.trim()) {
      alert("Preencha os campos corretamente");

      return;
    }

    const novaTarefa = {
      id: v4(),
      title: title,
      text: description,
      completada: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center p-6">
      <div className="w-[500px] space-y-5 ">
        <Title> Todo list React</Title>
        <Adicionar adicionarTarefa={adicionarTarefa} />
        <Tarefas
          tarefas={tarefas}
          vericarTarefa={tarefaChecked}
          deletarTarefa={deletarTarefa}
        />
      </div>
    </div>
  );
}

export default App;
