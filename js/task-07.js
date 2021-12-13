const textInput = document.querySelector("#font-size-control");
const textChangeSize = document.querySelector("#text");

const onSliderTextChange = () => {
  textChangeSize.style.fontSize = `${textInput.value}` + "px";
};

textInput.addEventListener("input", onSliderTextChange);
