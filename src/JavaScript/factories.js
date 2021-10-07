const Todo = (title, description, dueDate, priority, notes, project) => {
  const props = {
    _title: title,
    _description: description,
    _dueDate: dueDate,
    _priority: priority,
    _notes: notes,
    _checklist: [],
    _project: project || 'default',
    _done: false
  }

  const changeProp = (prop, val) => {
    props[`_${prop}`] = val;
  };

  const getProps = () => {
    return props;
  };

  const toggleDone = () => {
    props._done = !props._done;
  };
    
  const newCheckBox = (text) => {
    props._checklist.push(text);
  }
  
  const moveCheckBox = (index, direction) => {
    const arr = props._checklist;
    const element = arr[index];
    arr.splice(index, 1);
    if (direction == 'up') {
      arr.splice(index-1, 0, element);
    } else if (direction == 'down') {
      arr.splice(index+1, 0, element);
    }
    props._checklist = arr;
  };

  return {changeProp, getProps, toggleDone, newCheckBox, moveCheckBox};
};

const Project = (title, description, color) => {
  //nest the ToDo object inside of here
  const props = {
    _title: title,
    _description: description,
    _color: color,
    _todos: [],
  }

  const changeProp = (prop, val) => {
    props[`_${prop}`] = val;
  };

  const getProps = () => {
    return props;
  };

  const editTodo = (index, prop, val) => {
    props._todos[index][`_${prop}`] = val;
  };

  const toggleDone = (index) => {
    props._todos[index].toggleDone();

  };

  const createTodo = (title, description, dueDate, priority, notes) => {
    const newTodo = Todo(title, description, dueDate, priority, notes);
    props._todos.push(newTodo);
  };

  const createCheckBox = (index, text) => {
    props._todos[index].newCheckBox(text);
  };

  const moveCheckBox = (index, checkIndex, direction) => {
    props._todos[index].moveCheckBox(checkIndex, direction);
  };

  const Todo = (title, description, dueDate, priority, notes) => ({
    
    _title: title,
    _description: description,
    _dueDate: dueDate,
    _priority: priority,
    _notes: notes,
    _checklist: [],
    _done: false,
    
    toggleDone()  {
      console.log(this._done)
      this._done = !this._done;
      console.log(this._done);
    },
      
    newCheckBox(text) {
      this._checklist.push(text);
    },
    
    moveCheckBox(index, direction) {
      const arr = this._checklist;
      const element = arr[index];
      arr.splice(index, 1);
      if (direction == 'up') {
        arr.splice(index-1, 0, element);
      } else if (direction == 'down') {
        arr.splice(index+1, 0, element);
      }
      this._checklist = arr;
    }
    //return {changeProp, getProps, toggleDone, newCheckBox, moveCheckBox};
  });

  return { changeProp, getProps, createTodo, editTodo, toggleDone, createCheckBox, moveCheckBox }
}


export { Project }