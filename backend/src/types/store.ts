import { Task } from "../types/task";

// In-memory storage (array as temporary database)
export let tasks: Task[] = [
  { id: 1, title: "Learn React JS and Tailwind CSS", completed: true },
  { id: 2, title: "Build advanced project using React JS", completed: false },
  { id: 3, title: "Add project link in Resume", completed: false },
];

export let nextId: number = 4;

export function incrementId(): void {
  nextId++;
}