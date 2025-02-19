import { FC } from "react";
import { taskArrayProps } from "../types/ineterfaces";



  export const Task: FC<taskArrayProps> = ({ items }: taskArrayProps) => {
    return(
    <div className="p-5 bg-white border rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Title</th>
            <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Description</th>
            <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Priority</th>
            <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Status</th>
            <th className="px-4 py-2 text-sm font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">Option</th>
          </tr>
        </thead>
        <tbody>
          {items.map((task, index) => (
            <tr key={index} className="hover:bg-zinc-50">
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.title}</td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.description}</td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.priority}</td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">{task.status}</td>
              <td className="px-4 py-2 text-sm text-gray-600 border-b border-gray-200 cursor-pointer ">
                <button type="button">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
  };
  
