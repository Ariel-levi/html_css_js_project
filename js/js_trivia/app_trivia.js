import {question_ar} from "./dataTrivia.js"
import {declareTriviaElements, showQuestion} from "./questionAnswers.js"
let counter = 0;

let q_ar // מערך משתנה של כל השאלות
window.onload = () => {
  init();
  burger_init();
}

const init = () => {
  // _ -> קשור ללאו דש ברגע שחיברנו את הקובץ
  // ל הטמל אוטומטית יש הגדרה שהוא גלובלי בכל הקוד
  
  // מערבב את המערך המקורי רק בהתחלה של האפליקצהי
  q_ar = _.shuffle(question_ar);
  
  declareTriviaElements()
  showNextQuestion()
}

export const showNextQuestion = () => {
  let a1 = document.querySelector("#id_a1");
  let a2 = document.querySelector("#id_a2");
  let a3 = document.querySelector("#id_a3");
  let a4 = document.querySelector("#id_a4");

  // console.log(question_ar);
  // console.log(q_ar);

  a1.style.background = "#eee";
  a2.style.background = "#eee";
  a3.style.background = "#eee";
  a4.style.background = "#eee";

  showQuestion(q_ar[counter])

  counter++;
}
