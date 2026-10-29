
document.addEventListener("DOMContentLoaded", function() {
  
  const footerHTML = `
  <footer>
    <p>© <span id="year"></span> Милован Лисаев</p>
  </footer>
 `;

 document.body.insertAdjacentHTML('beforeend', footerHTML);

 document.getElementById("year").textContent = new Date().getFullYear();


  const searchInput = document.getElementById("char-search");
  
  if (searchInput) {
    const allCards = document.querySelectorAll(".card");
    searchInput.addEventListener("input", function() {
      const query = this.value.toLowerCase().trim();
      allCards.forEach(function(card) {
        const nameElement = card.querySelector("h3"); 
        if (!nameElement) return; 
        
        const name = nameElement.textContent.toLowerCase();
        if (name.includes(query)) {
          card.style.display = ""; 
        } else {
          card.style.display = "none"; 
        }
      });
    });
  }

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
});