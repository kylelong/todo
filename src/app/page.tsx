'use client'
import ToDoEntry from './TodoEntry'
import { useState } from 'react'
import { Item } from './TodoEntry'
import { XMarkIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
export default function Home() {
  const [todos, setTodos] = useState<Item[]>([])
  const addTodo = (todo: Item) => {
    setTodos((prev) => [...prev, todo])
  }
  const completeTodo = (idx: number) => {
    const currTodos = [...todos]
    currTodos[idx] = { ...currTodos[idx], status: 'done' }
    setTodos(currTodos)
  }
  const deleteTodo = (idx: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, index) => index !== idx))
  }
  const reversedTodos = [...todos].reverse()
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-800 p-4 text-center">
      <h3 className="mb-3 mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-white md:text-4xl">
        Todo List
      </h3>
      <ToDoEntry addTodo={addTodo} />
      <div className="mr-16 mt-2 flex w-[400px] flex-col">
        {todos.map((todo: Item, idx: number) => {
          return (
            <div
              className="m-1 flex h-full gap-2 rounded-md bg-slate-900 text-white"
              key={idx}
            >
              <div className="flex gap-2 p-3">
                <input
                  className="mt-1 accent-black hover:accent-green-300"
                  type="checkbox"
                  onClick={() => completeTodo(idx)}
                />
                <div
                  className={classNames({
                    'line-through': todo.status === 'done',
                  })}
                >
                  {todo.text}
                </div>
              </div>
              <button className="ml-auto flex w-14 items-center justify-center rounded-br-md rounded-tr-md bg-red-300 p-3">
                <XMarkIcon
                  className="h-6 w-6 text-slate-800 hover:text-white"
                  onClick={() => deleteTodo(idx)}
                />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
