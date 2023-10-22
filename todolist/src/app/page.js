import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="flex my-16">
        <div className="m-auto">
          <h1 className="text-9xl my-10 font-sans">WELCOME TODO_LIST</h1>{" "}
          <button className="p-3 bg-transparent border-2 mx-9 rounded-md border-black bg-slate-500 hover:border-lime-400 ">
            <Link href="/todos"> Add Todos</Link>
          </button>
          <button className="p-3 bg-transparent border-2 mx-9 rounded-md border-black bg-slate-500 hover:border-lime-400 ">
            Completed Tasks
          </button>
        </div>
      </div>
    </div>
  )
}
