import React from "react";
import CardGrid from "../grid/CardGrid";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TabBodyProps {
    isActiveTab: string;
    allTask: Task[];
    completedTasks: Task[];
    activeTasks: Task[];
}

export default function TabBody({ isActiveTab, allTask, completedTasks, activeTasks }: TabBodyProps) {
    switch (isActiveTab) {
        case "all":
            return <CardGrid items={allTask} />;
        case "completed":
            return <CardGrid items={completedTasks} />;
        case "active":
            return <CardGrid items={activeTasks} />;
        default:
            return <CardGrid items={allTask} />;
    }
}
