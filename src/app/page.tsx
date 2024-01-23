import CreateTodo from "./components/form/CreateTodo";
import Tab from "./components/tabs/Tab";

export default function Home() {
  return (
    <div>
      <h2 className="text-lg text-gray-900 sm:text-2xl mx-auto pt-12 max-w-screen-md text-center ">Master Your Day with the Power of Todo Lists</h2>
      {/* form add todo */}
      <CreateTodo />
      {/* tabs (all , completed) */}
      <h1 className="text-lg text-gray-900 sm:text-2xl mx-auto pt-12 max-w-screen-md text-center">A comprehensive list of tasks, including those completed and currently active.</h1>
      <Tab />

    </div>
  )
}
