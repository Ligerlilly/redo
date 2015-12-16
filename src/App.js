import React, { Component } from 'react';

let nextTodoId = 0;
export default class App extends Component {
  render() {
    return (
      <div>
      <button onClick={() =>{
        this.props.store.dispatch({
          type: "ADD_TODO",
          text: 'test',
          id: nextTodoId++
        });
      }}>
        Add ToDo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}
