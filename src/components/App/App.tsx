import { useTranslation } from 'react-i18next'

import { Box, Heading, Text } from '@chakra-ui/react'

import { TodoList } from '@components/Todo/TodoList.ui'
import { AddTodoForm } from '@components/Todo/addTodo.ui'
import { useTodoStore } from '@store'

export const App = () => {
	const { t } = useTranslation()
	const { todos, addTodo, deleteTodo, toggleComplete, editTodo } =
		useTodoStore()

	return (
		<Box p={4}>
			<Heading
				as="h1"
				size="lg"
				mb={4}
			>
				{t('app.title')}
			</Heading>
			<Text mb={4}>{t('app.description')}</Text>

			<AddTodoForm addTodo={addTodo} />

			<TodoList
				title={t('todo.completed')}
				todos={todos.filter(todo => !todo.completed)}
				toggleComplete={toggleComplete}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>

			<TodoList
				title={t('todo.uncompleted')}
				todos={todos.filter(todo => todo.completed)}
				toggleComplete={toggleComplete}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
		</Box>
	)
}
