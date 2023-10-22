import React from "react";
import Todo from "../model/todo";
import dbConnect from "../utils/dbConnect";
import { redirect } from "next/navigation";
import Link from "next/link";

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
    redirect("/todos");
  }

  const deleteTodo = async (data) => {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());
    await Todo.deleteOne({ _id: id });
    redirect("/todos");
  };

  const completedTodo = async (data) => {
    "use server";
    dbConnect();
    let id = JSON.parse(data.get("id")?.valueOf());
    // let oldTodo = await Todo.findOne({ _id: id });
    // let todo = { completed: true, _id: oldTodo._id, todo: oldTodo.todo };
    let completedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { completed: true }
    );
    console.log(completedTodo);
    redirect("/completed_tasks");
  };

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
              <li className="flex-1"></li>
              <li className="flex-1">Title</li>
              <li className="flex-1">Actions</li>
            </ul>
            {/* <br /> */}
            <div className="max-h-72 overflow-auto">
              {todos.map((element) => {
                if (element.completed === false) {
                  return (
                    <>
                      <ul
                        key={element._id}
                        className="flex space-x-28 border p-4 bg-gray-600 rounded-md"
                      >
                        <li className="flex-1">
                          <form action={completedTodo}>
                            <input
                              type="hidden"
                              name="id"
                              id="id"
                              value={JSON.stringify(element._id)}
                            />
                            <button
                              className="bg-green-500 px-1 rounded-md text-white hover:border-2 hover:border-black"
                              type="submit"
                            >
                              Completed
                            </button>
                          </form>
                        </li>
                        <li className="flex-1 text-white">{element.todo}</li>
                        <li className="flex-1">
                          <div className="flex">
                            <Link href={"/edit/" + element._id}>
                              <button className="bg-blue-600 border-white rounded-md text-white px-2 hover:border-2 hover:border-black mx-2">
                                Edit
                              </button>
                            </Link>
                            <form action={deleteTodo}>
                              <input
                                type="hidden"
                                name="id"
                                id="id"
                                value={JSON.stringify(element._id)}
                              />
                              <button
                                className="bg-red-600 border-white rounded-md text-white px-2 hover:border-2 hover:border-black mx-2"
                                type="submit"
                              >
                                Delete
                              </button>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
