import React from 'react'
import './App.css'
import PostList from './components/postList'
import DynamicForm from './components/dynamicForm'
import WindowWidthDisplay from './components/windowWidthDisplay'
import * as yup from 'yup'

//initial data (array of objects) taken to pass as a prop to the DynamicForm component
const formConfig = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    validation: yup.string().required('First Name is required'),
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validation: yup
      .string()
      .email('Invalid email')
      .required('Email is required'),
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    validation: yup
      .number()
      .min(0, 'Age must be a positive number')
      .required('Age is required'),
  },
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <WindowWidthDisplay />
        <DynamicForm formConfig={formConfig} />
        <PostList />
      </header>
    </div>
  )
}

export default App
