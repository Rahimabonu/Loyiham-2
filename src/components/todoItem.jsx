
const TodoItem = ({title, id}) => {
console.log(title);


  return (
    <>
        <div className="todo">
            <span>{id}.{title}</span>
            <i onClick={() =>{ alert(id)}} class="fa-solid fa-trash"></i>

        </div>
    </>
)
}

export default TodoItem