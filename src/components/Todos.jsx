import { useEffect, useState } from "react"
import Todo from "./Todo";


const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const HOST_URL = "https://jsonplaceholder.typicode.com";

    useEffect(() => {
        fetch(`${HOST_URL}/todos`)
        .then((response) => response.json())
        .then((json) => {
            setTodos(json);
            setLoading(false);
        });
    }, []);

  return (
    <div>
        {loading? (
            <p>Loading todos...</p>
        ):(todos.map((todo) => <Todo key={todo.id} obj={todo} />)
        )}
    </div>
  )
}

export default Todos