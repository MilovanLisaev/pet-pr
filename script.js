const footerHTML = `
  <footer>
    <p>© <span id="year"></span> Милован Лисаев</p>
  </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);

document.getElementById("year").textContent = new Date().getFullYear();