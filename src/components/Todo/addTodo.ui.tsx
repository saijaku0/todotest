import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Input } from '@chakra-ui/react'

interface AddTodoFormProps {
	addTodo: (text: string) => void
}

export const AddTodoForm = ({ addTodo }: AddTodoFormProps) => {
	const [inputValue, setInputValue] = useState('')
	const { t } = useTranslation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputValue.trim()) {
			addTodo(inputValue)
			setInputValue('')
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Input
				placeholder={t('todo.enterTask')}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				mb={2}
				htmlSize={50}
				width="auto"
			/>
			<Button
				type="submit"
				colorScheme="teal"
			>
				{t('todo.add')}
			</Button>
		</form>
	)
}
