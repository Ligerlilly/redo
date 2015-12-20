import React, { Component } from 'react';
import {FilterLink} from './FilterLink';
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';

let nextTodoId = 0;

export default class App extends Component {
  render() {
    const {
      todos,
      visibilityFilter,
      store
    } = this.props;
    const visibleTodos = this.props.getVisibleTodos(
      todos,
      visibilityFilter
    );
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            store.dispatch({
              type: 'ADD_TODO',
              id: nextTodoId++,
              text
            })
          }
        />
        <TodoList
           todos={visibleTodos}
          onTodoClick={id =>
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            })
          } />
        <p>
          Show:
          {' '}
          <FilterLink filter='SHOW_ALL' store={store} currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_ACTIVE' store={store} currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_COMPLETED' store={store} currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
