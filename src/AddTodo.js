import React from 'react';

export const AddTodo = ({
  store,
  nextTodoId
}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId,
          text: input.value
        })
        input.value = '';
      }


      }>
        Add ToDo
      </button>
    </div>
  );
};
