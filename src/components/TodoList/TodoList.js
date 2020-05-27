import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {
  const { todoList, changeImportant, changeDone, removeItem } = props;

  return (
    <div className="list-group">
      {todoList.map((todoUnit) => {
        const todoItemProps = {
          todoUnit,
          changeImportant,
          changeDone,
          removeItem,
        };

        return <TodoItem key={todoUnit.text} {...todoItemProps} />;
      })}
    </div>
  );
}

export default TodoList;
