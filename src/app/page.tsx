import CreateTodo from "@/components/form/CreateTodo";
import Tab from "@/components/tabs/Tab";
import dynamic from "next/dynamic";
import { Suspense } from "react";



export default function Home() {
  return (
    <div>
      <h2 className="text-lg text-sky-800 sm:text-2xl mx-auto py-6 mt-5 max-w-screen-md text-center ">Master Your Day with the Power of Todo Lists</h2>
      {/* form add todo */}
      <CreateTodo />
      {/* tabs (all , completed , active) */}
      <Suspense fallback={<h2>loading</h2>} >
        <Tab />
      </Suspense>
    </div>
  )
}
