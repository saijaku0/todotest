import { useTranslation } from 'react-i18next'

import {
	Button,
	Checkbox,
	Editable,
	EditableInput,
	EditablePreview,
	HStack,
	ListItem,
	Text
} from '@chakra-ui/react'

import { ITodoItemProps } from '@/shared/interface'

export const TodoItem = ({
	todo,
	toggleComplete,
	editTodo,
	deleteTodo
}: ITodoItemProps) => {
	const { t } = useTranslation()

	return (
		<ListItem>
			<HStack spacing={4}>
				<Checkbox
					isChecked={todo.completed}
					onChange={() => toggleComplete(todo.id)}
				/>
				<Editable
					defaultValue={todo.text}
					onSubmit={newText => editTodo(todo.id, newText)}
				>
					<EditablePreview
						as={Text}
						textDecoration={todo.completed ? 'line-through' : 'none'}
					/>
					<EditableInput />
				</Editable>
				<Button
					colorScheme="red"
					onClick={() => deleteTodo(todo.id)}
				>
					{t('todo.delete')}
				</Button>
			</HStack>
		</ListItem>
	)
}
