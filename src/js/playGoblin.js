import imgMy from '../../src/img/goblin.png'

export default function playGoblin() {
  document.addEventListener("DOMContentLoaded", () => {
    const imageDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgMy ;
    img.alt = "Goblin image";
    imageDiv.appendChild(img);

    function moviGoblin() {
      const field = document.querySelectorAll(".cellField");
      const newPosition = Math.floor(Math.random() * (field.length - 1));
      field[newPosition].appendChild(imageDiv);
    }

    setInterval(moviGoblin, 1000);
  });
}
