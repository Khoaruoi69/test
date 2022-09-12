import {ADD_TODO, SET_TODO_INPUT,DELETE_TODO} from './constants'

export const setTodoInput = (payload)=> ({
    type: SET_TODO_INPUT,
    payload
})
export const AddTodo = (payload)=> ({
    type: ADD_TODO,
    payload
})

export const DeleteTodo = (payload)=> ({
    type: DELETE_TODO,
    payload
})