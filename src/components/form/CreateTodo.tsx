"use client"
import React, { useState, FormEvent } from 'react';
import useStore from '@/store/useStore';

export default function CreateTodo() {
  const [message, setMessage] = useState<string>('');

  const { addTask } = useStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:flex mx-auto py-8 sm:max-w-md lg:mt-0">
      <label htmlFor="add-todo" className="sr-only">
        Add Todo
      </label>
      <input
        type="text"
        name="add-todo"
        id="add-todo"
        autoComplete="name"
        required
        className="input-todolist transition-300"
        placeholder="Create New Todo"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="flex flex-row-reverse pt-4 sm:py-0 justify-center mx-1 gap-1">
        <button type="submit" className="transition-300 btn-add-todo">
          Add Todo!
        </button>
        <button className="transition-300 btn-cancel" type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
}
