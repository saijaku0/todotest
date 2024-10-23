import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { ITodoStore } from '@/shared/interface'

export const useTodoStore = create<ITodoStore>()(
	persist(
		set => ({
			todos: [],
			addTodo: (text: string) => {
				set(state => ({
					todos: [...state.todos, { id: Date.now(), text, completed: false }]
				}))
			},
			deleteTodo: (id: number) => {
				set(state => ({
					todos: state.todos.filter(todo => todo.id !== id)
				}))
			},
			toggleComplete: (id: number) => {
				set(state => ({
					todos: state.todos.map(todo =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo
					)
				}))
			},
			editTodo: (id: number, newText: string) => {
				set(state => ({
					todos: state.todos.map(todo =>
						todo.id === id ? { ...todo, text: newText } : todo
					)
				}))
			}
		}),
		{
			name: 'todo-storage',
			storage: createJSONStorage(() => localStorage)
		}
	)
)
