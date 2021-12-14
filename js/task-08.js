const formSubmit = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const dataObject = {
    email: email.value,
    password: password.value,
  };

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log(dataObject);
  event.currentTarget.reset();
};

formSubmit.addEventListener("submit", onFormSubmit);
