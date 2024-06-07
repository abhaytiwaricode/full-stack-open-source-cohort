import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([
    {
      title: 'Go to gym',
      description: 'Hit gym from 5-7',
      id: 1,
    },
    {
      title: 'Go to class',
      description: 'Hit class from 7-9',
      id: 2,
    },
  ]);

  return (
    <>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title}
      {props.description}
    </div>
  );
}

export default App;
