"use client"
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useMemo, useCallback } from "react";
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

  const [allTask, setAllTask] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [tabs, setTabs] = useState<Tab[]>([]);

  const memoToggleTask = useCallback(
    (id: number) => {
      toggleTask(id);
    },
    [toggleTask]
  );

  const memoDeleteTask = useCallback(
    (id: number) => {
      deleteTask(id);
    },
    [deleteTask]
  );

  useEffect(() => {
    setAllTask(tasks);
  }, [tasks]);

  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.completed);
    const activeTasks = tasks.filter((task) => !task.completed);
    setCompletedTasks(completedTasks);
    setActiveTasks(activeTasks);
  }, [tasks]);

  const tabsMemo = useMemo(() => [
    { name: 'All', href: '?tab=all', count: allTask.length, current: "all" },
    { name: 'Completed!', href: '?tab=completed', count: completedTasks.length, current: "completed" },
    { name: 'Active', href: '?tab=active', count: activeTasks.length, current: "active" },
  ], [allTask, completedTasks, activeTasks]);

  useEffect(() => {
    setTabs(tabsMemo);
  }, [tabsMemo]);

  return (
    <>
      <TabHead isActiveTab={isActiveTab} tabs={tabs} />
      <TabBody isActiveTab={isActiveTab} allTask={allTask} completedTasks={completedTasks} activeTasks={activeTasks} />
    </>
  );
}
