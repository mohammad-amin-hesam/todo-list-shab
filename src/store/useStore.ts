// store/useStore.ts
import LocalStorageMiddleware from '@/middleware/LocalStorageMiddleware';
import { create } from 'zustand'

const localStorageMiddleware = new LocalStorageMiddleware('lists'); // Replace with a unique key for your app

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  clearCompletedTasks: () => void;
  allTaskLength: number; // Initialize these properties only when needed
  completedTaskLength: number;
  activeTaskLength: number;
}

const useStore = create<TasksState>((set) => {
  // Load initial state from localStorage
  const initialState = localStorageMiddleware.loadState();

  const state: TasksState = {
    tasks: initialState?.tasks || [],
    addTask: (text: string) => {
      set((prevState) => {
        const newTasks = [...prevState.tasks, { id: prevState.tasks.length + 1, text, completed: false }];
        const newState = { ...prevState, tasks: newTasks };
        localStorageMiddleware.saveState(newState);
        return newState;
      });
    },
    toggleTask: (id: number) => {
      set((prevState) => {
        const newTasks = prevState.tasks.map((task: Task) => (task.id === id ? { ...task, completed: !task.completed } : task));
        const newState = { ...prevState, tasks: newTasks };
        localStorageMiddleware.saveState(newState);
        return newState;
      });
    },
    deleteTask: (id: number) => {
      set((prevState) => {
        const newTasks = prevState.tasks.filter((task: Task) => task.id !== id);
        const newState = { ...prevState, tasks: newTasks };
        localStorageMiddleware.saveState(newState);
        return newState;
      });
    },
    clearCompletedTasks: () => {
      set((prevState) => {
        const newTasks = prevState.tasks.filter((task: Task) => !task.completed);
        const newState = { ...prevState, tasks: newTasks };
        localStorageMiddleware.saveState(newState);
        return newState;
      });
    },
    // Initialize length properties only when needed
    allTaskLength: initialState?.tasks?.length || 0,
    completedTaskLength: initialState?.tasks?.filter((task: Task) => task.completed).length || 0,
    activeTaskLength: initialState?.tasks?.filter((task: Task) => !task.completed).length || 0,
  };

  return state;
});

export default useStore;