import {  Button } from '../components/button';
import { Input } from '../components/input';
import { Modal } from '../components/modal';
import {  useState } from 'react';
import { Task } from "../components/taskCompenents";
import { fieldAddTask, fieldsRegister } from '../components/field';
import { RegisterForm } from '../components/RegisterForm'


const Home = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const [showViewTaskModal, setShowViewTaskModal] = useState(false);

  return (
    <div className="flex flex-col gap-5">
        {/*Création d'une Cartes statistiques avec les mêmes informations  */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-3 mx-auto md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className="p-4 text-center transition duration-200 bg-white rounded-lg shadow hover:shadow-lg"
                >
                    <h4 className="text-lg font-semibold">Nombre de patients :</h4>
                    <p className="text-2xl font-bold text-blue-500">5</p>
                </div>
            ))} 
        </div>
        {/* Main content */}
        <div className="container">
          {
             <div className="p-5 bg-white rounded-lg shadow-2xl">
              <p className="font-sans text-xl font-bold">Number{taskItems.length > 2 ? 's': ''} of Task is {taskItems.length}</p>
             <table className="min-w-full bg-white">
               <thead>
                 <tr>
                      <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Title</th>
                      <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Description</th>
                      <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Priority</th>
                      <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Status</th>
                  </tr>
                </thead>
                <tbody>
                    {taskItems.map((task, index) => (
                      <tr key={index} className="hover:bg-zinc-50">
                        <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.title}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.description}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.priority}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.status}</td>
                      </tr>
                    ))}
                </tbody>        
             </table>
           </div>
          }
         <div className="">
           <p className="font-sans text-xl font-bold">Status Task Progressing</p>
            <div className="flex justify-center w-full gap-4 p-3 mt-5 rounded shadow-2xl contStatus items">
                <div className="TODO">
                    <span className="font-serif text-2xl font-semibold">TODO</span>
                  <div className="flex flex-col mt-5 border rounded shadow-2xl w-sm bg-zinc-100">
                    {taskItems.map((task) => (
                      <p key={task.id}>{task.status ==="TODO" ? task.title: ''}</p>
                    ))}
                  </div>
                </div>
                <div className="IN_PROGRESS">
                <span className="font-serif text-2xl font-semibold">IN_PROGRESS</span>
                  <div className="flex flex-col mt-5 border rounded shadow-2xl w-sm bg-zinc-100">
                  {taskItems.map((task) => (
                      <p key={task.id}>{task.status ==="IN_PROGRESS" ? task.title: ''}</p>
                    ))}
                  </div>
                </div>
                <div className="COMPLETED">
                <span className="font-serif text-2xl font-semibold">COMPLETED</span>
                  <div className="flex flex-col mt-5 border rounded shadow-2xl w-sm bg-zinc-100">
                  {taskItems.map((task) => (
                      <p key={task.id}>{task.status ==="COMPLETED" ? task.title : ''}</p>
                    ))}
                  </div>
                </div>
              </div>
         </div>
           <p className="font-sans text-xl font-bold">Task Progressing</p>
          <div className="flex justify-center w-full gap-4 p-3 mt-5 rounded shadow-2xl contStatus items ">
            <div className="LOW">
            <span className="font-serif text-2xl font-semibold">LOW</span>
              <div className="flex flex-col mt-5 border rounded shadow-2xl w-sm">
               {
                taskItems.map((task) =>(
                  <p key={task.id}>{task.priority === "LOW" ? task.title : ''}</p>
                ))
               }
              </div>
            </div>
            <div className="MEDIUM">
            <span className="font-serif text-2xl font-semibold">MEDIUM</span>
              <div className="flex flex-col mt-5 bg-white border rounded shadow-2xl w-sm">
              {
                taskItems.map((task) =>(
                  <p key={task.id}>{task.priority === "MEDIUM" ? task.title : ''}</p>
                ))
               }
              </div>
            </div>
            <div className="HIGH">
            <span className="font-serif text-2xl font-semibold">HIGH</span>
              <div className="flex flex-col mt-5 border rounded shadow-2xl w-sm">
              {
                taskItems.map((task) =>(
                  <p key={task.id}>{task.priority === "HIGH" ? task.title : ''}</p>
                ))
               }
              </div>
            </div>
          </div>
        </div>
        
      <div className="flex items-center justify-center w-full gap-3">
      <Button type="button" onClick={() => setShowAddTaskModal(true)}>Add Task</Button>
      <Button type="button" onClick={() => setShowRegisterModal(true)}>Register</Button>
      <Button type="button" onClick={() => setShowLoginModal(true)}>Login</Button>
      <Button type="button" onClick={() => setShowViewTaskModal(true)}>View task</Button>
      </div>
      {showAddTaskModal && (
        <Modal title="Add Task" onClose={() => setShowAddTaskModal(false)}>
          <form action="" method="post" className="p-5 mx-auto border rounded shadow-2xl w-md bg-zinc-50">
            {
              fieldAddTask.map((field) => (
                <Input
                  key={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  disabled={false}
                  id={field.id}
                  onChange={(e) => console.log(e.target.value)}
                />
              ))
            }
            <Button type="submit" onClick={() => alert('Task added!')}>Add Task</Button>
          </form>
        </Modal>
      )}

    {showRegisterModal && (
            <Modal 
              title="Register" 
              onClose={() => setShowRegisterModal(false)}
            >
              <RegisterForm />
            </Modal>
          )}
          
      {showLoginModal && (
        <Modal title="Login" onClose={() => setShowLoginModal(false)}>
          <form action="" method="post" className="p-5 mx-auto border rounded shadow-2xl w-md bg-zinc-50">
            {fieldsRegister.slice(2).map((field) =>(
              <Input
                key={field.id}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                disabled={false}
                id={field.id}
                onChange={(e) => console.log(e.target.value)}
              />
            ))}
            <Button type="submit" onClick={() => alert('User registered!')}>Login</Button>
          </form>
        </Modal>
      )}
      
      {showViewTaskModal && (
        <Modal title="View Tasks" onClose={() => setShowViewTaskModal(false)}>
          <div className="flex flex-col gap-5">
            <Task items={taskItems}/>
          </div>
        </Modal>
      )}
     
    </div>
  );
};

export default Home;

  const taskItems = [
    {
      id: 1,
      title: "Task 1",
      description: "This is a task",
      priority: "LOW",
      status: "TODO"
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is another task",
      priority: "MEDIUM",
      status: "IN_PROGRESS"
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is a third task",
      priority: "HIGH",
      status: "COMPLETED"
    },
    {
      id: 4,
      title: "Task 4",
      description: "This is a fourth task",
      priority: "HIGH",
      status: "TODO"
    },
    {
      id: 5,
      title: "Task 5",
      description: "This is a five task",
      priority: "HIGH",
      status: "COMPLETED"
    },
  ];