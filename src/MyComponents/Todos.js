import React from 'react';
import TodoItem from  "./TodoItem"
const Todos = (props) => {
  return (
    <div className="container">
      <h5 className='text-center'>todos List!</h5>
      {props.todos.length===0?"no todos in list":
      props.todos.map((todo)=>{
        return   <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
    
    
    </div>
  )
}

export default Todos
