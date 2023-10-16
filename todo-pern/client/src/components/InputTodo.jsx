import { useState } from 'react';

function InputTodo() {
  const [description, setDescription] = useState('');

  function handleChange(event) {
    const input = event.target.value;
    setDescription(input);
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const body = { description };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form method="post" className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={description}
          placeholder={`Write your todo's here!`}
        ></input>
        <button className="btn btn-success btn-add">Add</button>
      </form>
    </>
  );
}

export default InputTodo;
