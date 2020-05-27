import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <div
      className={`list-group-item todo-item ${
        props.todoUnit.important ? 'todo-item--bold' : ''
      }`}
    >
      {props.todoUnit.text}
      <span className="todo-item__buttons-wrap">
        <button
          onClick={() => {
            props.removeItem(props.todoUnit.text);
          }}
          type="button"
          className="btn btn-outline-danger todo-item__button"
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={() => {
            props.importantBtnClick(props.todoUnit);
          }}
          type="button"
          className={`btn btn${
            props.todoUnit.important ? '' : '-outline'
          }-warning todo-item__button`}
        >
          <i className="fas fa-exclamation"></i>
        </button>
        <button
          onClick={() => {
            props.doneBtnClick(props.todoUnit);
          }}
          type="button"
          className={`btn btn${
            props.todoUnit.done ? '' : '-outline'
          }-success todo-item__button`}
        >
          <i className="fas fa-check"></i>
        </button>
      </span>
    </div>
  );
}

export default TodoItem;
