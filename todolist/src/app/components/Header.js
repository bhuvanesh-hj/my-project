import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24 shadow-lg">
      <h1 className="font-bold text-5xl">
        <Link href="/">TODO_LIST</Link>
      </h1>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <Link href="/" className="hover:font-extrabold hover:text-base">
            Home
          </Link>
          <Link href="/todos" className="hover:font-extrabold hover:text-base">
            Todos
          </Link>
          <Link href="#" className="hover:font-extrabold hover:text-base">
            Completed_Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
