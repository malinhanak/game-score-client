import React, { useReducer } from 'react'

export const SET_CONTENT = 'SET_CONTENT';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_CONTENT = 'CLEAR_CONTENT';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const Store = React.createContext()

const initialState = {
  content: null,
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case SET_CONTENT:
      return { ...state, content: action.payload }
    case SET_ERROR:
      return { ...state, error: action.payload }
    case CLEAR_CONTENT:
      return { ...state, content: null }
    case CLEAR_ERROR:
      return { ...state, error: null }

    default:
      return state
  }
}

export default function ContentProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}