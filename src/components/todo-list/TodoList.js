import * as React from 'react';

import { TodoItem } from '../todo-item';

export function TodoList({ tasks, handleRemoveTask }) {
  return (
    <div className='container flex mx-auto w-full items-center justify-center'>
      <ul className='flex flex-col p-4'>
        {tasks.map((task) => (
          <TodoItem key={task.id} item={task} handleRemove={handleRemoveTask} />
        ))}
      </ul>
    </div>
  );
}
