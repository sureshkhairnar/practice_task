import React, { createContext, useContext, useReducer, useEffect } from 'react'
import axios from 'axios' // Import Axios

const PostContext = createContext()

const initialState = {
  posts: [],
  loading: true,
  error: null,
}

const postReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      }
    case 'FETCH_ERROR':
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // Use Axios to make the request
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message })
      })
  }, [])

  return <PostContext.Provider value={state}>{children}</PostContext.Provider>
}

const usePostContext = () => {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider')
  }
  return context
}

export { PostProvider, usePostContext }
