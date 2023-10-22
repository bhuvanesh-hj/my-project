import Todo from "@/app/model/todo";
import dbConnect from "@/app/utils/dbConnect";
import { redirect } from "next/navigation";

export default async function edit({ params }) {
  dbConnect();
  const todos = await Todo.findOne({ _id: params.id });

  const updatedTodo = async (data) => {
    "use server";
    let todo = data.get("todo")?.valueOf();
    let updatedTodo = await Todo.findByIdAndUpdate(
      { _id: params.id },
      { todo }
    );
    console.log(updatedTodo);
    redirect("/todos")
  };

  return (
    <div className="flex flex-col">
      <div className="m-auto my-6">
        <form action={updatedTodo}>
          <input
            type="text"
            id="todo"
            name="todo"
            className="p-2 border rounded-sm"
            placeholder="Add todo-list"
            defaultValue={todos.todo}
          />
          <button
            className="border p-2 rounded-md mx-2 hover:border-b-black hover:border-2 hover:border-r-black"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}
