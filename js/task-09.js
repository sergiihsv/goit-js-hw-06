function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColorEl = document.querySelector(".change-color");
const spanValueEl = document.querySelector(".color");

const onBodyBackgroundColor = () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  spanValueEl.textContent = currentColor;
};

buttonChangeColorEl.addEventListener("click", onBodyBackgroundColor);
