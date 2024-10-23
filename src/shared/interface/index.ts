import { Todo } from '../type'

export interface ITodoStore {
	todos: Todo[]
	addTodo: (text: string) => void
	deleteTodo: (id: number) => void
	toggleComplete: (id: number) => void
	editTodo: (id: number, newText: string) => void
}

export interface ITodoItemProps {
	todo: Todo
	toggleComplete: (id: number) => void
	editTodo: (id: number, newText: string) => void
	deleteTodo: (id: number) => void
}

export interface ITodoListProps {
	title: string
	todos: Todo[]
	toggleComplete: (id: number) => void
	editTodo: (id: number, newText: string) => void
	deleteTodo: (id: number) => void
}
