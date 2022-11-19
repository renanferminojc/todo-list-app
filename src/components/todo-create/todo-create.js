import * as React from 'react';

import { Form } from '../form';
import { Input } from '../input';
import { Button } from '../button';
import { TodoList } from '../todo-list';

import { generateID } from '../../helpers/function';

export function TodoCreate() {
  const [taskList, setTaskList] = React.useState([]);
  const [inputText, setInputText] = React.useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!inputText) {
      return;
    }

    const date = new Date();
    const createdAt = `${date.getHours()}:${date.getMinutes()}`;
    setTaskList([
      ...taskList,
      { name: inputText, id: generateID(), createdAt },
    ]);
    setInputText('');
  };

  const handleRemoveTask = (task) => {
    setTaskList(taskList.filter((t) => t.id !== task));
  };

  return (
    <div className='flex flex-col items-center my-0 mx-auto max-w-[480px] py-16 px-8 container'>
      <h1 className='text-white text-5xl mb-8 pb-2 transition-colors ease-in-out duration-[0.4s] font-permanentMaker border-b-[2px] border-b-green hover:text-green'>
        Todo List
      </h1>
      <Form onSubmit={onSubmit} className='flex flex-col'>
        <Input
          className='w-full h-12 px-4 py-1 rounded-md border border-gray-100 text-gray-800 focus:outline-none'
          onChange={handleInputChange}
          value={inputText}
          placeholder='Adicione uma tarefa'
        />
        <Button
          className='w-full h-8 px-4 py-1 rounded-md my-3 bg-green text-white hover:bg-opacity-90'
          type='submit'
        >
          Adicionar
        </Button>
      </Form>

      <TodoList tasks={taskList} handleRemoveTask={handleRemoveTask} />
    </div>
  );
}
