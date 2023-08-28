import { deleteTodo, toggleTodoStatus, updateTodo } from "@/firebase/service";
import { CreateTodo, Todo } from "@/types/todo.interface";
import React, { useState } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";

export default function Card({ data, updateValue }: { data: Todo; updateValue: any }) {
  const { id, todo, isCompleted } = data;
  const updateStatus = () => {
    toggleTodoStatus({ id, todo, isCompleted: !isCompleted });
  };
  const deleteDoc = () => {
    deleteTodo(id);
  };
  const emitValue = () => {
    updateValue(data);
  };

  return (
    <>
      <div className="w-full p-4 bg-white hover:bg-slate-100 flex border-gray-200 rounded-lg shadow-lg text-black">
        <div className="flex items-center justify-between w-full">
          <div>
            <input
              checked={data.isCompleted ? true : false}
              id={"checked-box-" + data.id}
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              onChange={updateStatus}
            />
            {data.isCompleted ? (
              <>
                <del className="ml-2 text-sm font-medium  ">{data.todo}</del>
              </>
            ) : (
              <>
                <label htmlFor="checked-box" className="ml-2 text-sm font-medium  ">
                  {data.todo}
                </label>
              </>
            )}
          </div>
          <div className="flex">
            <BiEdit className="text-slate-700 mx-2" onClick={emitValue}></BiEdit>
            <BiTrash className="text-red-500" onClick={deleteDoc}></BiTrash>
          </div>
        </div>
      </div>
    </>
  );
}
