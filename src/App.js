import React, { Component } from 'react';
import {FilterLink} from './FilterLink';

let nextTodoId = 0;

export default class App extends Component {
  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;
    const visibleTodos = this.props.getVisibleTodos(
      todos,
      visibilityFilter
    );
    return (
      <div>
      <input ref={node => {
        this.input = node;
      }} />
      <button onClick={() =>{
        nextTodoId += 1;
        this.props.store.dispatch({
          type: "ADD_TODO",
          text: this.input.value,
          id: nextTodoId
        });
        this.input.value = '';
      }}>
        Add ToDo
        </button>
        <ul>
          {visibleTodos.map(todo =>
            <li key={todo.id} onClick={() => {
              this.props.store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            }}
            style={{
              textDecoration:
                todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink filter='SHOW_ALL' store={this.props.store} currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_ACTIVE' store={this.props.store} currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_COMPLETED' store={this.props.store} currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
