import { useState } from "react";
import Strawberry from "../icons/Strawberry.svg";

function Tasks() {
  const numberOfTasks = 0;
  const [listOfTasks, setListOfTasks] = useState([]);
  const [newTasks, setNewTasks] = useState({
    taskName: "",
    taskStatus: "todo",
    taskDescription: "",
    taskCycles: 0,
  });

  const handleTaskAdd = () => {
    if (newTasks.taskName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }
    if (newTasks.taskDescription.trim() === "") {
      alert("Please enter a task description.");
      return;
    }
    if (newTasks.taskCycles <= 0) {
      alert("Please enter a valid number of cycles.");
      return;
    }

    setListOfTasks((prev) => [...prev, { ...newTasks, taskStatus: "todo" }]);
    setNewTasks({
      taskName: "",
      taskStatus: "todo",
      taskDescription: "",
      taskCycles: 1,
    });
  };

  const handleTaskDelete = () => {
    
  };
  return (
    <>
      <div className="bg-black flex items-center justify-center flex-col px-4 py-4">
        <h1 className="text-white text-3xl font-bold m-10">Tasks</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-white text-2xl font-bold mb-4">Add Tasks</h2>
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg max-w-md mb-8 p-3">
              <div className="text-white font-semibold flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Task Name"
                  value={newTasks.taskName}
                  className="w-full p-2 mb-4 rounded top-0"
                  editable="true"
                  onChange={(e) =>
                    setNewTasks({ ...newTasks, taskName: e.target.value })
                  }
                />
              </div>
              <label
                htmlFor="taskDescription"
                className="text-white font-semibold flex items-center gap-2 mb-2"
              >
                <img src={Strawberry} alt="Strawberry" className="w-6 h-6" />
                Task Description
              </label>
              <textarea
                id="taskDescription"
                name="taskDescription"
                value={newTasks.taskDescription}
                placeholder="Task Description"
                className="w-full p-2 mb-4 px-2 py-2 rounded bg-gray-700 text-white"
                editable="true"
                onChange={(e) =>
                  setNewTasks({ ...newTasks, taskDescription: e.target.value })
                }
              />
              <div className="flex items-center gap-4 mb-4">
                <label
                  htmlFor="taskCycles"
                  className="text-white font-semibold"
                >
                  Number of Cycles:
                </label>
                <input
                  id="taskCycles"
                  type="number"
                  min="1"
                  max="10"
                  value={newTasks.taskCycles || "1"}
                  className="p-2 rounded bg-gray-700 text-white"
                  onChange={(e) =>
                    setNewTasks({
                      ...newTasks,
                      taskCycles: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  className="bg-[#9F2B68] p-2 rounded-lg hover:bg-[#9f2b6978] hover:ring-2 ring-[#702963] ring-offset-0"
                  onClick={handleTaskAdd}
                >
                  Add Task
                </button>
                <button className="bg-[#9F2B68] p-2 rounded-lg hover:bg-[#9f2b6978] hover:ring-2 ring-[#702963] ring-offset-0">
                  Discard
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <h2 className="text-white text-2xl font-bold mb-3.5">To-do List</h2>
            <div className="relative w-full">
              {listOfTasks.map((task, index) => (
                <div
                  key={index}
                  className="absolute bg-gray-700 text-white rounded-xl shadow-md w-full transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
                  style={{
                    transform: `translateY(${index * 40}px)`,
                    zIndex: index,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.zIndex = 999)}
                  onMouseLeave={(e) => (e.currentTarget.style.zIndex = index)}
                >
                  <div className={`${index % 2 == 0 ? ("bg-[#8A9A5B]") : ("bg-[#9F2B68]")} rounded-t-xl p-4`}>
                    <h3 className="text-xl font-semibold">{task.taskName}</h3>
                  </div>
                  <div className="p-4">
                  <p className="text-sm italic">{task.taskDescription}</p>
                  <p className="text-sm">Cycles: {task.taskCycles}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold">Completed Tasks</h2>
          </div>
        </div>
      </div>
      a
    </>
  );
}

export default Tasks;
