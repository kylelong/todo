'use client'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export interface Item {
  text: string
  status: 'todo' | 'done' | 'deleted'
}
interface Props {
  addTodo: (todo: Item) => void
}

const ToDoEntry = ({ addTodo }: Props) => {
  const [item, setItem] = useState<Item>({
    text: '',
    status: 'todo',
  })

  const handleChangeItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem((prev) => ({
      ...prev,
      text: e.target.value,
    }))
  }
  const handleSubmit = () => {
    if (!item.text.trim()) return
    addTodo(item)
    setItem({ text: '', status: 'todo' })
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }
  return (
    <div className="flex space-x-1">
      <input
        type="text"
        placeholder="Add a new todo..."
        className="w-96 rounded-md p-2 outline-none"
        onChange={handleChangeItemText}
        value={item.text}
        onKeyDown={handleKeyPress}
      ></input>
      <button className="relative right-16 rounded-br-md rounded-tr-md bg-green-300 p-3">
        <PlusIcon
          className="h-5 w-10 text-slate-800 hover:text-white"
          onClick={handleSubmit}
        />
      </button>
    </div>
  )
}

export default ToDoEntry
