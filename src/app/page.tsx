import CreateTodo from "./components/form/CreateTodo";
import Tab from "./components/tabs/Tab";

export default function Home() {
  return (
    <div>
      <h2 className="text-lg text-sky-800 sm:text-2xl mx-auto pt-12 max-w-screen-md text-center ">Master Your Day with the Power of Todo Lists</h2>
      {/* form add todo */}
      <CreateTodo />
      {/* tabs (all , completed , active) */}
      <Tab />

    </div>
  )
}
