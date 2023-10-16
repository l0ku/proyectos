import { useEffect, useState } from 'react';

import EditTodo from './EditTodo';

function ListTodo() {
  const [todos, setTodos] = useState([]);

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setTodos(
        todos.filter(todo => {
          if (todo.id !== id) {
            return todo;
          }
        })
      );
    }
  }

  async function getTodos() {
    try {
      const response = await fetch('http://localhost:3000/todos');
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map(todo => {
            return (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListTodo;
