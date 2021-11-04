import { Project } from './JavaScript/factories.js'
import './CSS/styles.css'
import { loadHeader } from './JavaScript/header.js';
import { loadMenu } from './JavaScript/menu.js';
import { loadContent } from './JavaScript/content.js';

const project = Project("TestProject", "This is a test", "#0000ff");
console.log(project.getProps());
project.createTodo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
console.log(project.getProps());
project.editTodo(0, 'title', 'Project test Title');
console.log(project.getProps());
project.toggleDone(0);
console.log(project.getProps());
project.createCheckBox(0, "baltimore wedding");
project.createCheckBox(0, "do the thing");
console.log(project.getProps());
project.moveCheckBox(0,0, "down");
console.log(project.getProps());

// const todoTwo = Todo("test1", "test2", "test3", "test4", "test5", "test6", "test7");
// console.log(todoTwo);
// todoTwo.changeProp('title', 'newTitle');
// todoTwo.changeProp('dueDate', '9/21/2021');
// todoTwo.toggleDone();
// todoTwo.newCheckBox('this is check item');
// todoTwo.newCheckBox('another check item');
// todoTwo.moveCheckBox(1, 'up');
// todoTwo.moveCheckBox(0, 'down');
// console.log(todoTwo.getProps());

loadHeader();
loadMenu();
loadContent();
