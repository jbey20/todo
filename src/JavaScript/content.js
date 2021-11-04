const loadContent = () => {
  const body = document.getElementById("body");
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");  
  contentDiv.innerHTML = `
    <h2 class="page-title">Sample Project</h2>
    
    <div class="task-item item-box clickable">
      <i class="fa fa-circle-o clickable grow task-checkcircle-icon" aria-hidden="true"></i>
      <p class="task-name">Sample task 1</p>
      <span class="task-date"><p class="task-date">10/20/2021 9:00am</p></span>
      <span class="task-icon-area">
        <i class="task-priority-icon">!</i>
        <i class="fa fa-check-square-o task-checkbox-icon" aria-hidden="true"></i>
      </span>
    </div>
    
    <div class="task-item item-box clickable">
      <i class="fa fa-circle-o clickable grow" aria-hidden="true"></i>
      <p class="task-name">Sample task 2</p>
      <span class="task-date"><p class="task-date">10/20/2021 9:00am</p></span>
    </div>
    
    <div class="task-item item-box clickable">
      <i class="fa fa-check-circle-o clickable grow" aria-hidden="true"></i>
      <p class="task-name done">Sample task 3</p>
      <span class="task-date"><p class="task-date">10/20/2021 9:00am</p></span>
    </div>
    
    <div class="task-item item-box new-task clickable">
      <i class="fa fa-check-circle-o clickable grow" aria-hidden="true"></i>
      <input class="destyled-input" placeholder="New task">
    </div>

    <i class="fa fa-3x fa-plus-circle task-add-btn" aria-hidden="true"></i>
  `
  body.appendChild(contentDiv);

  const formDivs = document.createElement("div");
  formDivs.innerHTML = `
    <form action="#" class="edit-task-view hidden">
      <span class="edit-task-name">
        <i class="fa fa-circle-o fa-lg clickable grow" aria-hidden="true"></i>
        <input class="destyled-input" placeholder="Complete Todo GUI">
      </span>
      <!-- <label for="project">Project</label> -->npm 
      <select name="project" id="project" class="destyled-input edit-task-project">
        <option value="Sample Project 1">Sample Project 1</option>
        <option value="Sample Project 2">Sample Project 2</option>
        <option value="Sample Project 3">Sample Project 3</option>
      </select>
      <input class="edit-task-description destyled-input" placeholder="Enter your description here.">
      <input type="date" class="date-text edit-task-date ">
      <p class="edit-task-priority priority-medium">High Priority</p>
      <textarea rows="10" class="edit-task-notes">Notes get put here.</textarea>
      <div class="edit-task-checklist checklist-area">
        <h3 class="subtask-title">Subtasks</h3>
        <i class="fa fa-check-square-o" aria-hidden="true"></i>
        <p>subtask item 1</p>
        <i class="fa fa-square-o" aria-hidden="true"></i>
        <p>subtask item 2</p>
        <i class="fa fa-square-o" aria-hidden="true"></i>
        <p>subtask item 3</p>
        <i class="fa fa-square-o" aria-hidden="true"></i>
        <p>subtask item 4</p>
      </div>
    </form>

    <form action="#" class="edit-project-view hidden">
      <label for="edit-project-name">Name:</label>
      <input class="edit-project-name destyled-input" placeholder="Sample Project 1" id="edit-project-name">
      <label for="edit-project-color">Color:</label>
      <input type="color" class="edit-project-color" id="edit-project-color" name="edit-project-color">
      <label for="edit-project-description">Description:</label>
      <input class="edit-project-description destyled-input" placeholder="Enter your description here." id="edit-project-description">
      <button id="edit-project-save-btn">Save</button>
      <button id="edit-project-cancel-btn">Cancel</button> 
    </form>
  `
   body.appendChild(formDivs);

}

export {loadContent};