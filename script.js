const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const plusIcons = document.querySelectorAll(".question img");

questions.forEach((question, i) => {
  question.addEventListener("click", function () {
    if (!answers[i].classList.contains("active")) {
      answers.forEach((answer, j) => {
        answer.classList.remove("active");
        plusIcons[j].setAttribute("src", "assets/images/icon-plus.svg");
      });
      answers[i].classList.add("active");
      plusIcons[i].setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      answers[i].classList.remove("active");
      plusIcons[i].setAttribute("src", "assets/images/icon-plus.svg");
    }
  });
});
