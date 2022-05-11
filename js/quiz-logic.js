import { fetch_data } from "./fetch_data.js";

const loader = document.getElementById("loader-view");

const quiz_start_view = document.querySelector(".quiz-start-view");
const quiz = document.getElementById("quiz");

const question_text = document.getElementById("question");

const options = document.getElementById("options-container");

const start_btn = document.getElementById("start-button");

const submit_btn = document.getElementById("submit-button");

let answer;
let option_picked;

start_btn.addEventListener("click", startTheTest);

options.addEventListener("click", (e) => {
  if (option_picked) {
    return;
  }
  option_picked = e.target.classList[0];
  options.children[Number(option_picked)].classList.add("user-answer");
  submit_btn.disabled = false;
});

submit_btn.addEventListener("click", () => {
  change_option_bgColor();
});

function random_number_generator(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

function startTheTest() {
  quiz_start_view.classList.toggle("display-none");
  loader.classList.toggle("display-none");
  fetch_data()
    .then((data) => {
      loader.classList.toggle("display-none");
      quiz.classList.toggle("display-none");
      const random_number = random_number_generator(0, data.length - 1);
      const random_question = data[random_number];
      question_text.innerText = random_question.question;
      answer = random_question.answer;
      let option_html = "";
      for (let i = 0; i < random_question.options.length; i++) {
        const option = random_question.options[i];
        option_html += `<div class="${i}">${option}</div>`;
      }
      options.innerHTML = option_html;
    })
    .catch((err) => {
      console.log(err);
    });
}

function change_option_bgColor() {
  answer = Number(answer);
  option_picked = Number(option_picked);
  let curr_options = options.children;
  for (let i = 0; i < curr_options.length; i++) {
    if (i === option_picked) {
      if (i === answer) {
        curr_options[i].classList.add("correct-answer");
      } else {
        curr_options[i].classList.add("wrong-answer");
      }
    } else {
      if (i === answer) {
        curr_options[i].classList.add("correct-answer");
      }
    }
  }
  setTimeout(() => {
    answer = null;
    option_picked = null;
    quiz.classList.toggle("display-none");
    quiz_start_view.classList.toggle("display-none");
  }, 2000);
}
