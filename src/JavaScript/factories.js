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
}


export { Todo }