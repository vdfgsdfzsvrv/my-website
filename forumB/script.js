// ===== ДАННЫЕ =====
let collection = JSON.parse(localStorage.getItem("movies")) || [
  {
    title: "Титаник",
    genre: "Драма",
    img: "https://i.imgur.com/2TeJf9K.jpg"
  },
  {
    title: "Начало",
    genre: "Триллер",
    img: "https://i.imgur.com/YoHpV3Z.jpg"
  },
  {
    title: "Интерстеллар",
    genre: "Фантастика",
    img: "https://i.imgur.com/EuFp4Fh.jpg"
  }
];

// ===== ЭЛЕМЕНТЫ =====
const container = document.getElementById("cardsContainer");
const addBtn = document.getElementById("addBtn");

// Если HTML ещё не загрузился — не выполняем код
if (!container || !addBtn) {
  console.error("HTML элементы не найдены!");
} else {

  // ===== СОХРАНЕНИЕ =====
  function save() {
    localStorage.setItem("movies", JSON.stringify(collection));
  }

  // ===== РЕНДЕР =====
  function render() {
    container.innerHTML = "";

    collection.forEach(function(movie) {

      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = movie.img;

      const content = document.createElement("div");
      content.className = "card-content";

      const title = document.createElement("h3");
      title.textContent = movie.title;

      const genre = document.createElement("p");
      genre.textContent = movie.genre;

      content.appendChild(title);
      content.appendChild(genre);

      card.appendChild(img);
      card.appendChild(content);

      container.appendChild(card);
    });
  }

  render();

  // ===== ДОБАВЛЕНИЕ =====
  addBtn.addEventListener("click", function() {

    const titleInput = document.getElementById("title");
    const genreInput = document.getElementById("genre");
    const imgInput = document.getElementById("img");

    if (!titleInput || !genreInput || !imgInput) return;

    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const img = imgInput.value.trim();

    if (title && genre && img) {

      collection.push({
        title: title,
        genre: genre,
        img: img
      });

      save();
      render();

      titleInput.value = "";
      genreInput.value = "";
      imgInput.value = "";
    }
  });

}