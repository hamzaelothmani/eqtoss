import React from 'react'
import { useContext } from 'react'
import { TodosContext } from './contexts/Context'

const Store = () => {
  const {todos, setTodos} = useContext(TodosContext)

  return (
    <div>globalState {todos} </div>

  )
}

export default Store