import React from 'react'
import Footer from './Footer'
import AddTodo from '@/views/home/AddTodo'
import VisibleTodoList from '@/views/home/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
