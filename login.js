const passField = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
const backgrond = document.querySelector(".content")
let showText = document.getElementById("alart");

passField.addEventListener(
  "input", () => {
    if (passField.value.length < 3) {
      showText.textContent = "";
      backgrond.classList.remove("weak");
      backgrond.classList.remove("medium");
      backgrond.classList.remove("strong");

    }
    else if (passField.value.length <= 4) {
   
      backgrond.classList.add("weak");
      backgrond.classList.remove("medium");
      backgrond.classList.remove("strong");
      showText.textContent = "Your password is too low"

    }
    else if (passField.value.length <= 6) {
      
      backgrond.classList.remove("weak");
      backgrond.classList.add("medium");
      backgrond.classList.remove("strong");
      showText.textContent = "Your password is Medium"

    }
    else {
      
      backgrond.classList.remove("weak");
      backgrond.classList.remove("medium");
      backgrond.classList.add("strong");
      showText.textContent = "Your password is Strong"

    }
  
});

showBtn.addEventListener("click", () => {
  if (passField.type === "password") {
    passField.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#3498db";
  }
  else {
    passField.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
})

