import {useState} from "react"
import AddTask from "./componets/AddTask";
import Tasks from "./componets/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack",
      isCompleted: false
  },
  {
    id:2,
      title: "Estudar ingles",
      description: "Estudar ingles para se tornar fluente",
      isCompleted: false
  },
  {
    id:3,
      title: "Estudar matematica",
      description: "Estudar matematica para se tornar um desenvolvedor full stack",
      isCompleted: false
  },
]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted};
      }
      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }


  //DELETAR AS TAREFAS
  function onDeleteTaskClick(taskId){

    const newTasks = tasks.filter(task => task.id !== taskId );
    setTasks(newTasks);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title, 
      description, 
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4" >
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas</h1>        
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  );
}

export default App;
