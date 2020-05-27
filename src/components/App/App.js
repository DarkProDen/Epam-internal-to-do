import React from 'react';
import Filter from '../Filter';
import TodoList from '../TodoList';
import NewItem from '../NewItem';
import TodoUnit from '../../entities/TodoUnit';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: {
        text: '',
        cases: ['All', 'Active', 'Done'],
        currentCaseIndex: 0,
      },
      todoList: [
        new TodoUnit('Drink Coffe', false, true),
        new TodoUnit('Make Awesome App', true),
        new TodoUnit('Have a lunch'),
      ],
    };
  }

  getVisibleTodoList() {
    const todoListFilteredByText = this.state.todoList.filter((todoUnit) =>
      RegExp(this.state.filter.text).test(todoUnit.text)
    );

    switch (this.state.filter.currentCaseIndex) {
      case 0:
        return todoListFilteredByText;
      case 1:
        return todoListFilteredByText.filter((todoUnit) => !todoUnit.done);
      case 2:
        return todoListFilteredByText.filter((todoUnit) => todoUnit.done);
      default:
        return this.state.todoList;
    }
  }

  changeFilterText = (text) => {
    let filter = this.state.filter;

    filter.text = text;
    this.setState({ filter });
  };

  changeFilterCase = (index) => {
    let filter = this.state.filter;

    filter.currentCaseIndex = index;
    this.setState({ filter });
  };

  changeImportant = (todoUnit) => {
    let todoList = this.state.todoList;
    let index = todoList.findIndex((item) => item === todoUnit);

    todoList[index].important = !todoUnit.important;

    this.setState({ todoList });
  };

  changeDone = (todoUnit) => {
    let todoList = this.state.todoList;
    let index = todoList.findIndex((item) => item === todoUnit);

    todoList[index].done = !todoUnit.done;

    this.setState({ todoList });
  };

  addNewTodoUnit = (text) => {
    if (this.state.todoList.some((todoUnit) => text === todoUnit.text)) {
      alert('This item is already exists.');
      return;
    }

    if (text !== '') {
      const todoList = this.state.todoList;

      todoList.push(new TodoUnit(text));
      this.setState({ todoList });
    }
  };

  removeItem = (todoUnitForRemove) => {
    this.setState({
      todoList: this.state.todoList.filter(
        (todoUnit) => todoUnit !== todoUnitForRemove
      ),
    });
  };

  render() {
    const filterProps = {
      filterCases: this.state.filter.cases,
      currentCaseIndex: this.state.filter.currentCaseIndex,
      changeFilterCase: this.changeFilterCase,
      changeFilterText: this.changeFilterText,
    };

    const todoListProps = {
      todoList: this.getVisibleTodoList(),
      changeImportant: this.changeImportant,
      changeDone: this.changeDone,
      removeItem: this.removeItem,
    };

    return (
      <div>
        <h1>Todo List</h1>
        <Filter {...filterProps} />
        <TodoList {...todoListProps} />
        <NewItem addNewTodoUnit={this.addNewTodoUnit} />
      </div>
    );
  }
}

export default App;
