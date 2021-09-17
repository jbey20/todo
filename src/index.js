const todo = (title, description, dueDate, priority, notes, checklist, project) => ({
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  project: project || 'default',
  done: false,

  changeProp (prop, value) {
    this[prop] = value;
    console.log('here');
  },

});

const testTodo = todo("test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8");

console.log(testTodo);

testTodo.changeProp('title', 'thistest');
testTodo.changeProp('description', 'Test description for figureing out factory functions.')

console.log(testTodo);