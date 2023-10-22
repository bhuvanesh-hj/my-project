import React from "react";
import Todo from "../model/todo";
import dbConnect from "../utils/dbConnect";
import { redirect } from "next/navigation";

const page = async () => {
  dbConnect();
  const todos = await Todo.find();

  async function newTodo(data) {
    "use server";
    let todo = data.get("todo")?.valueOf();
    try {
      dbConnect();
      let newTodo = new Todo({ todo, completed: false });
      await newTodo.save();
      console.log(newTodo);
    } catch (error) {
      console.error(error);
    }
    redirect("/todos")
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="m-auto my-6">
          <form action={newTodo}>
            <input
              type="text"
              id="todo"
              name="todo"
              className="p-2 border rounded-sm"
              placeholder="Add todo-list"
            />
            <button
              className="border p-2 rounded-md mx-2 hover:border-b-black hover:border-2 hover:border-r-black"
              type="submit"
            >
              Add Todo
            </button>
          </form>
        </div>
        <div className="m-auto">
          <div>
            <ul className="flex space-x-28 border p-4 bg-slate-300 rounded-md">
              <li className="flex-1">#</li>
              <li className="flex-1"></li>
              <li className="flex-1">Title</li>
              <li className="flex-1">Actions</li>
            </ul>
            {/* <br /> */}
            <div className="max-h-72 overflow-auto">
            {todos.map((element, i) => {
              return (
                <>
                  <ul key={element.id} className="flex space-x-28 border p-4 bg-gray-600 rounded-md">
                    <li className="flex-1 text-white">{i + 1}</li>
                    <li className="flex-1">
                      <button className="bg-green-500 px-1 rounded-md text-white hover:border-2 hover:border-black">
                        Completed
                      </button>
                    </li>
                    <li className="flex-1 text-white">{element.todo}</li>
                    <li className="flex-1">
                      <div className="flex">
                        <button className="bg-blue-600 border-white rounded-md text-white px-2 hover:border-2 hover:border-black mx-2">
                          Edit
                        </button>
                        <button className="bg-red-600 border-white rounded-md text-white px-2 hover:border-2 hover:border-black mx-2">
                          Delete
                        </button>
                      </div>
                    </li>
                  </ul>
                </>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default page;
