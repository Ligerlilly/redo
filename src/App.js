import React from 'react';
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import {Footer} from './Footer';
import VisibleTodoList from './VisibleTodoList'


export const App = ({
  todos,
  visibilityFilter,
  store,
  getVisibleTodos,
  nextTodoId
}) => {
  return (
    <div>
      <AddTodo store={store} nextTodoId={nextTodoId} />
      <VisibleTodoList store={store} getVisibleTodos={getVisibleTodos} />
      <Footer store={store} />
    </div>
  );
}
