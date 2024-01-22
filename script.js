"use strict";

window.addEventListener("DOMContentLoaded", start);  // Tillægger en event listener til DOMContentLoaded, som kalder start funktionen når DOM er loaded

function start() {                    // Start funktionen, som invoker hideAll og askAboutName funktionerne
  console.log("JavaScript kører");
  hideAll();
  askAboutName();
}

// 💯 - jeg forstår den linje 100% 

function hideAll() {          // hideAll funktionen, som tilføjer hide klassen til alle elementer med de givne id'er, som svare til css display: none
  document.querySelector("#ask-name").classList.add("hide");              // Tilføjer hide klassen til elementet med id'et ask-name
  document.querySelector("#ask-age").classList.add("hide");             // Tilføjer hide klassen til elementet med id'et ask-age    
  document.querySelector("#ask-birthyear").classList.add("hide");         // Tilføjer hide klassen til elementet med id'et ask-birthyear
  document.querySelector("#success").classList.add("hide");               // Tilføjer hide klassen til elementet med id'et success 
  document.querySelector("#failure").classList.add("hide");               // Tilføjer hide klassen til elementet med id'et failure
}

//💯 - jeg forstår den linje 100% 

function fillInFields(fieldname, value) {                                 // fillInFields funktionen, som tilføjer en value til et element med et givent data-field
  document.querySelectorAll(`[data-field=${fieldname}]`).forEach(element => (element.textContent = value));       // Vælger alle elementer med et givent data-field og tilføjer en value til dem
}

function askAboutName() {                                      // askAboutName funktionen, som tilføjer en event listener til submit på formen med id'et ask-name, som kalder answeredName funktionen
  const form = document.querySelector("#ask-name");           // Vælger formen med id'et ask-name
  form.addEventListener("submit", answeredName);              // Tilføjer en event listener til submit på formen med id'et ask-name, som kalder answeredName funktionen
  form.classList.remove("hide");                              // Fjerner hide klassen fra formen med id'et ask-name
}

//💯 - jeg forstår den linje 100%

function answeredName(event) {
  event.preventDefault();                                 // Forhindrer at siden bliver reloaded        

  const form = event.target;                                  // Vælger formen med id'et ask-name
  form.removeEventListener("submit", answeredName);           // Fjerner event listeneren fra submit på formen med id'et ask-name
  form.querySelector("button").disabled = true;             // Deaktiverer submit knappen på formen med id'et ask-name

  const firstname = form.firstname.value;                   // Vælger værdien af firstname fra formen med id'et ask-name
  console.log("Answered name: " + firstname);               // Logger firstname til konsollen

  fillInFields("firstname", firstname);                     // Kalder fillInFields funktionen med firstname som fieldname og firstname som value

  askAboutAge();                                          // Kalder askAboutAge funktionen          
}

//💯 - jeg forstår den linje 100%

function askAboutAge() {
  const form = document.querySelector("#ask-age");      // Vælger formen med id'et ask-age
  form.addEventListener("submit", answeredAge);         // Tilføjer en event listener til submit på formen med id'et ask-age, som kalder answeredAge funktionen
  form.classList.remove("hide");                      // Fjerner hide klassen fra formen med id'et ask-age
}

//💯 - jeg forstår den linje 100%

function answeredAge(event) {
  event.preventDefault();                               // Forhindrer at siden bliver reloaded

  const form = event.target;                          // Vælger formen med id'et ask-age          
  form.removeEventListener("submit", answeredAge);  // Fjerner event listeneren fra submit på formen med id'et ask-age
  form.querySelector("button").disabled = true;     // Deaktiverer submit knappen på formen med id'et ask-age

  const age = form.age.valueAsNumber;             // Vælger værdien af age fra formen med id'et ask-age
  console.log("Answered age: " + age);             // Logger age til konsollen    

  fillInFields("age", age);                         // Kalder fillInFields funktionen med age som fieldname og age som value

  askAboutBirthYear(age);                           // Kalder askAboutBirthYear funktionen med age som parameter
}

//💯 - jeg forstår den linje 100%

function askAboutBirthYear(age) {
  // calculate birthyear - expect that the person HASN'T had their birthday yet this year
  const birthyear = 2024 - 1 - age;                 // Udregner birthyear ved at trække 1 fra 2024 og derefter trække age fra

  fillInFields("birthyear", birthyear);             // Kalder fillInFields funktionen med birthyear som fieldname og birthyear som value

  const form = document.querySelector("#ask-birthyear");  // Vælger formen med id'et ask-birthyear
  form.addEventListener("submit", answeredBirthyear);     // Tilføjer en event listener til submit på formen med id'et ask-birthyear, som kalder answeredBirthyear funktionen 
  form.classList.remove("hide");                          // Fjerner hide klassen fra formen med id'et ask-birthyear
}
//💯 - jeg forstår den linje 100%

function answeredBirthyear(event) {
  event.preventDefault();                                 // Forhindrer at formen bliver reloaded

  const form = event.target;                              // Vælger formen med id'et ask-birthyear
  form.removeEventListener("submit", answeredBirthyear);  // Fjerner event listeneren fra submit på formen med id'et ask-birthyear
  form.querySelector("button").disabled = true;           // Deaktiverer submit knappen på formen med id'et ask-birthyear

  const correct = form.correct.value;                     // Vælger værdien af correct fra formen med id'et ask-birthyear
  console.log("Answered correct: " + correct);          // Logger correct til konsollen   

  if (correct === "yes") {
    showSuccess();                                    // Kalder showSuccess funktionen        
  } else {
    showFailure();                                  // Kalder showFailure funktionen        
  }
}

//💯 - jeg forstår den linje 100%


function showSuccess() {
  document.querySelector("#success").classList.remove("hide"); // Fjerner hide klassen fra elementet med id'et success, så den ikke længere er skjult
}
//💯 - jeg forstår den linje 100%


function showFailure() {
  document.querySelector("#failure").classList.remove("hide"); // Fjerner hide klassen fra elementet med id'et failure så den ikke længere er skjult
}
//💯 - jeg forstår den linje 100%
