import React from "react";
import CardItem from "../card/CardItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface CardGridProps {
  items: Task[];
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item: Task) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
