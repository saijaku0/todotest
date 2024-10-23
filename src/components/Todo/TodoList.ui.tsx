import { Box, Heading, List } from '@chakra-ui/react'

import { ITodoListProps } from '@/shared/interface'

import { TodoItem } from './TodoItem.ui'

export const TodoList = ({
	title,
	todos,
	toggleComplete,
	editTodo,
	deleteTodo
}: ITodoListProps) => {
	return (
		<Box mt={4}>
			<Heading
				as="h2"
				size="md"
				mb={2}
			>
				{title}
			</Heading>
			<List spacing={3}>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						toggleComplete={toggleComplete}
						editTodo={editTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</List>
		</Box>
	)
}
