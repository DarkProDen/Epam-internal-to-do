import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  return (
    <div className="list-group">
      {props.todoList.map((element) => (
        <TodoItem
          todoUnit={element}
          key={element.text}
          importantBtnClick={props.importantBtnClick}
          doneBtnClick={props.doneBtnClick}
          removeItem={props.removeItem}
        />
      ))}
    </div>
  );
}

export default TodoList;
