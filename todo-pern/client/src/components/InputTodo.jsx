import { Fragment, useState } from 'react';

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
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    } finally {
      setDescription('');
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form method="post" className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={description}
        ></input>
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
