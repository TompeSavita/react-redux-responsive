import './TodoItem.css';

const TodoItem = (props) => {
    return(
        <div className='container'>
      <div className = "title">
          {props.title}
      </div>  
       <div className = "body">
       {props.body}
   </div> 
   </div> 
       )
  };
  
  export default TodoItem;