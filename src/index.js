// const todo = (title, description, dueDate, priority, notes, checklist, project) => ({
//   title,
//   description,
//   dueDate,
//   priority,
//   notes,
//   checklist,
//   project: project || 'default',
//   done: false,

//   changeProp (prop, value) {
//     this[prop] = value;
//     console.log('here');
//   },

//   toggleDone () {
//     this.done = !this.done;
//   }
  
// });

// const testTodo = todo("test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8");

// console.log(testTodo);

// testTodo.changeProp('title', 'thistest');
// testTodo.changeProp('description', 'Test description for figureing out factory functions.');
// testTodo.toggleDone();

// console.log(testTodo);


const todo = (title, description, dueDate, priority, notes, checklist, project) => {
  const props = {
    _title: title,
    _description: description,
    _dueDate: dueDate,
    _priority: priority,
    _notes: notes,
    _checklist: checklist || null,
    _project: project || 'default',
    _done: false
  }

  const changeProp = (prop, val) => {
    props[`_${prop}`] = val;
  };

  const getProps = () => {
    return props;
  };

  return {changeProp, getProps};
};


const todoTwo = todo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
console.log(todoTwo);
todoTwo.changeProp('title', 'newTitle');
todoTwo.changeProp('dueDate', '9/21/2021');
console.log(todoTwo.getProps());