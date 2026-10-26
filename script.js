const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const zoomableImages = document.querySelectorAll('.zoomable');

zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.showModal();
  });
});

modal.addEventListener('click', () => {
  modal.close();
});


const footerHTML = `
  <footer>
    <p>© <span id="year"></span> Милован Лисаев</p>
  </footer>
`;

document.body.insertAdjacentHTML('beforeend', footerHTML);

document.getElementById("year").textContent = new Date().getFullYear();