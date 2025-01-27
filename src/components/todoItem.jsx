
const TodoItem = ({title}) => {
console.log(title);


  return (
    <>
        <div className="todo">
            <span>{title}</span>
        </div>
    </>
)
}

export default TodoItem