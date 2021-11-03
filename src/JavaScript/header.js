const loadHeader = () => {
  const body = document.getElementById('body');

  const header = document.createElement('header');
  header.innerHTML = `
  <button class="header-item icon bars">
    <i class="fa fa-bars"></i>
  </button>
  <div class="header-item logo"><h1>YouDo</h1></div>
  <button class="header-item icon add"></button>
  `;

  header.classList.add("grid1", "header");
  body.appendChild(header);
}

export {loadHeader};