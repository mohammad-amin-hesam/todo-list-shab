"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TabHead from "./TabHead";
import useStore from "@/store/useStore";
import TabBody from "./TabBody";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Tab {
  name: string;
  href: string;
  count?: number;
  current: string;
}

export default function Tab() {
  const searchParams = useSearchParams();
  const isActiveTab = searchParams.get("tab") || "all";

  const { tasks, toggleTask, deleteTask, completedTaskLength, allTaskLength } = useStore();

  const [tabs, setTabs] = useState<Tab[]>([]);

  const [allTask, setAllTask] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    const activeTasks = tasks.filter((task) => !task.completed);

    setAllTask(tasks);
    setCompletedTasks(completedTasks);
    setActiveTasks(activeTasks);

    setTabs([
      { name: 'All', href: '?tab=all', count: tasks.length, current: "all" },
      { name: 'Completed!', href: '?tab=completed', count: completedTasks.length, current: "completed" },
      { name: 'Active', href: '?tab=active', count: activeTasks.length, current: "active" },
    ]);

  }, [tasks]);


  return (
    <>
      <TabHead isActiveTab={isActiveTab} tabs={tabs} />
      <TabBody isActiveTab={isActiveTab} allTask={allTask} completedTasks={completedTasks} activeTasks={activeTasks} />
    </>
  );
}
