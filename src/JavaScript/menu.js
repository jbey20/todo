const loadMenu = () => {
  const body = document.getElementById("body");

  const menuDiv = document.createElement('div');
  menuDiv.classList.add("menu");
  menuDiv.innerHTML = `
    <div class="menu-item" id="inbox">
      <h3 class="clickable item-box">
        <i class="fa fa-inbox" aria-hidden="true"></i>
        Inbox
      </h3>
    </div>
    <div class="menu-item" id="today">
      <h3 class="clickable item-box">
        <i class="fa fa-calendar-o" aria-hidden="true"></i>
        Today
      </h3>
    </div>
    <div class="menu-item" id="projects">
      <h3 class="menu-shaded item-box">Projects 
        <span>
          <i class="fa fa-lg fa-angle-down menu-icon-right clickable grow" aria-hidden="true"></i>
          <i class="fa fa-plus-circle menu-icon-right clickable grow" aria-hidden="true"></i>
        </span>
      </h3>
      <h4 class="clickable item-box indented">E2E</h4>
      <h4 class="clickable item-box indented">The Odin Project</h4>
    </div>
    <div class="menu-item" id="labels">
      <h3 class="menu-shaded item-box">Labels
        <span>
          <i class="fa fa-lg fa-angle-down menu-icon-right clickable grow" aria-hidden="true"></i>
          <i class="fa fa-plus-circle menu-icon-right clickable grow" aria-hidden="true"></i>
        </span>
      </h3>
      <h4 class="clickable item-box indented">High Priority</h4>
      <h4 class="clickable item-box indented">Medium Priority</h4>
      <h4 class="clickable item-box indented">Low Priority</h4>
    </div>
  `;

  body.appendChild(menuDiv);

}

export {loadMenu};