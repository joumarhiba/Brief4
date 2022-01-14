let form = document.getElementById("frml");
let ajt = document.getElementById("ajt");

let lastName = document.getElementById("last-name").value;
let firstName = document.getElementById("first-name").value;
let date = document.getElementById("date").value;
let numTele = document.getElementById("num-tl").value;
let mail = document.getElementById("email").value;
let mld = document.getElementById("maladie").value;
let textRegex = /^[a-zA-Z-\s]+$/;
let telRegex = /^(0|\+212)[5-7][0-9]{8}$/;
let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let erreur = document.getElementById("msg");

ajt.addEventListener("click", function () {
  if (
    lastName.trim() == "" ||
    firstName.trim() == "" ||
    date.trim() == "" ||
    numTele.trim() == "" ||
    mail.trim() == "" ||
    mld.trim() == ""
  ) {
    erreur.innerHTML = "Veuillez remplir tous les champs.";
    erreur.style.color = "red";
  } else if (
    !textRegex.test(lastName) ||
    !textRegex.test(firstName) ||
    !textRegex.test(mld)
  ) {
    erreur.innerHTML =
      "le nom, le prénom et la maladie n'acceptent que les lettres et les tirets.";
    erreur.style.color = "red";
  } else if (!telRegex.test(numTele)) {
    erreur.innerHTML = "le numero de telephone invalide";
    erreur.style.color = "red";
  } else if (!emailRegex.test(mail)) {
    erreur.innerHTML = "Email invalide";
    erreur.style.color = "red";
  } else {
    erreur.innerHTML = ":)";
    erreur.style.color = "green";
  }
});
