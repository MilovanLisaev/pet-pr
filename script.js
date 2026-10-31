
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

  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


 const eventBanner = document.getElementById("event-banner");
  
  if (eventBanner) {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    const birthdays = [
      { name: "Деян", day: 14, month: 1, img: "images/char-11-Deyan.jpg" },
      { name: "Лешек", day: 17, month: 4, img: "images/char-21-Lezek.jpg" },
      { name: "Вета", day: 7, month: 8, img: "images/char-31-Veta.jpg" },
      { name: "Аделрик", day: 29, month: 8, img: "images/char-41-Adelrik.jpg" },
      { name: "Милан", day: 1, month: 6, img: "images/char-51-Milan.jpg" },
      { name: "Ефим", day: 2, month: 5, img: "images/char-61-Efim.jpg" },
      { name: "Смелун", day: 16, month: 8, img: "images/char-81-Smelun.jpg" },
      { name: "Елена", day: 18, month: 5, img: "images/char-91-Elena.jpg" },
      { name: "Леса", day: 18, month: 12, img: "images/char-101-Lesa.jpg" },
      { name: "Гоззо", day: 21, month: 10, img: "images/char-111-Gozzo.jpg" },
      { name: "Андрей", day: 31, month: 10, img: "images/char-121-Andrey.jpg" },
      { name: "Лессе", day: 27, month: 7, img: "images/char-22-Lesse.jpg" },
      { name: "Гриффин", day: 13, month: 3, img: "images/char-32-Griffin.jpg" },
      { name: "Софос", day: 24, month: 5, img: "images/char-42-Sophos.jpg" },
      { name: "Гесперос", day: 13, month: 8, img: "images/char-52-Hesperos.jpg" },
      { name: "Мальва", day: 15, month: 9, img: "images/char-62-Malva.jpg" },
      { name: "Мези", day: 11, month: 10, img: "images/char-72-Mezi.jpg" },
      { name: "Ариус", day: 14, month: 12, img: "images/char-82-Arius.jpg" },
    ];

    let foundEvent = false;

    for (let char of birthdays) {
      if (char.day === currentDay && char.month === currentMonth) {
        eventBanner.innerHTML = `🎉 Сегодня день рождения у <strong>${char.name}</strong>! <img src="${char.img}" alt="${char.name}">`;
        foundEvent = true;
        break;
      }
    }

    if (!foundEvent) {
      eventBanner.innerHTML = `📅 Сегодня событий нет.`;
    }
  }

});
