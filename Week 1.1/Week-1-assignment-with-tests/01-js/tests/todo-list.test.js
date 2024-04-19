const Todo = require('../hard/todo-list');

describe('Todo', () => {
  let todoList;

  beforeEach(() => {
    todoList = new Todo();
  });

  it('remove', () => {
    expect(() => todoList.remove(-1)).toThrowError('Index out of bounds');
    expect(() => todoList.remove(0)).toThrowError('Index out of bounds');
    expect(() => todoList.remove(1)).toThrowError('Index out of bounds');
  });

  it('update', () => {
    todoList.add('Task 1');
    expect(() => todoList.update(-1, 'Updated Task')).toThrowError(
      'Index out of bounds'
    );
    expect(() => todoList.update(1, 'Updated Task')).toThrowError(
      'Index out of bounds'
    );
  });

  it('get', () => {
    todoList.add('Task 1');
    expect(() => todoList.get(-1)).toThrowError('Index out of bounds');
    expect(() => todoList.get(1)).toThrowError('Index out of bounds');
  });

  it('remove and update with invalid indexes', () => {
    expect(() => todoList.remove(-1)).toThrowError('Index out of bounds');
    expect(() => todoList.remove(0)).toThrowError('Index out of bounds');
    expect(() => todoList.remove(1)).toThrowError('Index out of bounds');
    expect(() => todoList.update(-1, 'Updated Task')).toThrowError(
      'Index out of bounds'
    );
    expect(() => todoList.update(1, 'Updated Task')).toThrowError(
      'Index out of bounds'
    );
  });
});
