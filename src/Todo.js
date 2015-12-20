import React from 'react';

export const Todo = ({
  onClick,
  completed,
  text
}) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration:
          completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  );
};
