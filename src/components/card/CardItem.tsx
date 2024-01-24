import useStore from "@/store/useStore";
import React from "react";
import { Checked, Deleted, UTurn } from "../custom-icon/CustomIcon";

interface CardItemProps {
  item: {
    id: number;
    text: string;
    completed: boolean;
  };
}

export default function CardItem({ item }: CardItemProps) {
  const { toggleTask, deleteTask } = useStore();

  return (
    <li className={`col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow min-h-[content]  ${item.completed ? "opacity-20" : ""}`}>
      <div className="flex w-full items-center justify-between space-x-6 p-6 shadow-sm">
        <div className="flex w-full items-between justify-between space-x-3">
          <p
            className={`mt-1 text-sm text-gray-500 ${item.completed ? "line-through" : ""
              }`}
          >
            {item.text}
          </p>
          <div className="flex items-center space-x-4">
            <button type="button" onClick={() => toggleTask(item.id)}>
              {item.completed ? <UTurn size={18} color="gray" /> : <Checked size={24} color="green" />}
            </button>
            <button type="button" onClick={() => deleteTask(item.id)}>
              <Deleted size={24} color="red" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
