import './TodoItem.css'

export function TodoItem ({completed, id, tittle, toggleTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {tittle}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-delete">Delete</button>
        </li>)
}