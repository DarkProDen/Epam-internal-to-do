import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const { todoUnit, changeImportant, changeDone, removeItem } = props;

  return (
    <div className={`todo-item ${todoUnit.important ? 'todo-item--bold' : ''}`}>
      {todoUnit.text}
      <span className="todo-item__buttons-wrap">
        <button
          onClick={() => {
            removeItem(todoUnit);
          }}
          type="button"
          className="btn btn-outline-danger todo-item__button"
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => {
            changeImportant(todoUnit);
          }}
          type="button"
          className={`btn btn${
            todoUnit.important ? '' : '-outline'
          }-warning todo-item__button`}
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button
          onClick={() => {
            changeDone(todoUnit);
          }}
          type="button"
          className={`btn btn${
            todoUnit.done ? '' : '-outline'
          }-success todo-item__button`}
        >
          <i className="fas fa-check"></i>
        </button>
      </span>
    </div>
  );
}

export default TodoItem;
