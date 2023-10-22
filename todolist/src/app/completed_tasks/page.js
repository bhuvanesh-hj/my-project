import Todo from "../model/todo";
import dbConnect from "../utils/dbConnect";

const completed_tasks = async () => {
  dbConnect();
  const todos = await Todo.find();
  return (
    <div className="flex flex-col">
      <div className="m-auto my-3 w-[30%]">
        <ul className="flex justify-between mx-16 bg-orange-200 p-4 rounded-md">
          <li>Title</li>
        </ul>
        <br />
        <div className="max-h-[50%] overflow-auto">
          {todos.map((element) => {
            return (
              <>
                {element.completed === true && (
                  <ul className="flex justify-between mx-16 bg-green-600 my-1 p-3 rounded-md">
                    <li>Completed</li>
                    <li>{element.todo}</li>
                  </ul>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default completed_tasks;
