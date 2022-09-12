
import {useStore, action} from './store'
import {useRef} from 'react'
import { DeleteTodo } from './store/action'


function App() {
  const [state,dispatch] = useStore()
  const {todos, todoInput} = state
  const inputRef = useRef()

  console.log("todoUnput: ", todoInput)

  const handleAdd = () =>{
    dispatch(action.AddTodo(todoInput))
    dispatch(action.setTodoInput(''))
    inputRef.current.focus()
  }
  console.log(todos)


  return (
 <div>
  <input
  ref = {inputRef}
   value={todoInput}
  placeholder="Enter todo ..."
  onChange={(e) =>{
    dispatch(action.setTodoInput(e.target.value))
  }}
  
  />
  <button onClick={handleAdd}> Add</button>
  <ul>
    {todos.map((todo, index) => (
      <li key ={index}> {todo}
      <span onClick={()=>dispatch(DeleteTodo(index))} >  X </span>
      </li>
    ))}
  </ul>
 </div>
  )
}

export default App;
