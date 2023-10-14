/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from 'react';

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  // edit description fn
  async function updateDescription(e) {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.id}`}
      >
        Edit
      </button>

      <div
        className="modal fade"
        id={`id${todo.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => {
          setDescription(todo.description);
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setDescription(todo.description);
                }}
              ></button>
            </div>

            <form>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                  }}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setDescription(todo.description);
                  }}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={e => {
                    updateDescription(e);
                  }}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditTodo;
