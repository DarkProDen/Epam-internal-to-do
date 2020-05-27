import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  render() {
    return (
      <form
        className="new-item"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addNewTodoUnit(this.state.text);
          this.setState({ text: '' });
        }}
      >
        <input
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
          className={'form-control new-item__text'}
          placeholder={'Add new item...'}
        ></input>
        <button
          type="submit"
          className={'btn btn-outline-success new-item__button'}
        >
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}

export default NewItem;
