const button = document.getElementById("new-quote");

const randomNumber = Math.floor(Math.random() * 11);
fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then(
    (data) => (
      (document.getElementById("text").innerHTML = data[randomNumber]["text"]),
      (document.getElementById("author").innerHTML =
        data[randomNumber]["author"])
    )
  )
  .catch((error) => console.log(error));

function update() {
  const randomNumber = Math.floor(Math.random() * 11);
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then(
      (data) => (
        (document.getElementById("text").innerHTML =
          data[randomNumber]["text"]),
        (document.getElementById("author").innerHTML =
          data[randomNumber]["author"])
      )
    )
    .catch((error) => console.log(error));
}

button.addEventListener("click", update);
