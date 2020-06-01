import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  const { todoList, changeImportant, changeDone, removeItem } = props;

  return (
    <ul className="list-group">
      {todoList.map((todoUnit) => {
        const todoItemProps = {
          todoUnit,
          changeImportant,
          changeDone,
          removeItem,
        };

        return (
          <ui className="list-group-item">
            <TodoItem key={todoUnit.text} {...todoItemProps} />
          </ui>
        );
      })}
    </ul>
  );
}

export default TodoList;
