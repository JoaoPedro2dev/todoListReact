import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/titles/Titles";

function TaskPage() {
  const navigation = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const text = searchParams.get("text");

  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex flex-col justify-center items-center">
      <div className="w-[500px] flex items-center justify-center relative p-6">
        <button
          onClick={() => navigation(-1)}
          className="text-slate-50 p-2 bg-slate-400 rounded-md absolute left-0"
        >
          <ChevronLeftIcon />
        </button>

        <Title>Detalhes de {'"' + title + '"'}</Title>
      </div>

      <div className="w-[500px] bg-slate-300 p-6 space-y-2 rounded-md cursor-default">
        <h1 className="font-bold">{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TaskPage;
