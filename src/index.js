import { Todo } from './JavaScript/factories.js'




const todoTwo = Todo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
console.log(todoTwo);
todoTwo.changeProp('title', 'newTitle');
todoTwo.changeProp('dueDate', '9/21/2021');
todoTwo.toggleDone();
todoTwo.newCheckBox('this is check item');
todoTwo.newCheckBox('another check item');
todoTwo.moveCheckBox(1, 'up');
todoTwo.moveCheckBox(0, 'down');
console.log(todoTwo.getProps());