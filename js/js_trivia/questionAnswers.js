import { showNextQuestion } from "./app_trivia.js";
import { question_ar } from "./dataTrivia.js";

// קובץ שיהיה אחראי על הצגת השאלות
// ועל האירועים של לחיצת התשובות

let q, a1, a2, a3, a4;
let correctAnswer;
let score = 0;
let endnum = question_ar.length - 1;

export const declareTriviaElements = () => {
  q = document.querySelector("#id_q");
  a1 = document.querySelector("#id_a1");
  a2 = document.querySelector("#id_a2");
  a3 = document.querySelector("#id_a3");
  a4 = document.querySelector("#id_a4");

  a1.addEventListener("click", () => {
    if (a1.innerHTML == correctAnswer) {
      a1.style.background = "rgb(217, 255, 160)";
      score += 10;
      endnum--;
      scoreCal();
      // setTimeout(() => {
      //   alert("Good 😉")
      // }, 500);

      setTimeout(showNextQuestion, 2000);
      endGame();
    } else {
      endnum--;
      a1.style.background = "rgb(255, 148, 148)";
      showCorrectAnswer();
      setTimeout(showNextQuestion, 2000);
      endGame();
    }
  });
  a2.addEventListener("click", () => {
    if (a2.innerHTML == correctAnswer) {
      a2.style.background = "rgb(217, 255, 160)";
      endnum--;
      score += 10;
      scoreCal();
      // setTimeout(() => {
      //   alert("Good 😉")
      // }, 500);

      setTimeout(showNextQuestion, 2000);
      endGame();
    } else {
      endnum--;
      a2.style.background = "rgb(255, 148, 148)";
      showCorrectAnswer();
      setTimeout(showNextQuestion, 2000);
      endGame();
    }
  });
  a3.addEventListener("click", () => {
    if (a3.innerHTML == correctAnswer) {
      a3.style.background = "rgb(217, 255, 160)";
      score += 10;
      endnum--;
      scoreCal();
      // setTimeout(() => {
      //   alert("Good 😉")
      // }, 500);

      setTimeout(showNextQuestion, 2000);
      endGame();
    } else {
      endnum--;
      a3.style.background = "rgb(255, 148, 148)";
      showCorrectAnswer();
      setTimeout(showNextQuestion, 2000);
      endGame();
    }
  });
  a4.addEventListener("click", () => {
    if (a4.innerHTML == correctAnswer) {
      a4.style.background = "rgb(217, 255, 160)";
      score += 10;
      endnum--;
      scoreCal();
      // setTimeout(() => {
      //   alert("Good 😉")
      // }, 500);

      setTimeout(showNextQuestion, 2000);
      endGame();
    } else {
      endnum--;
      a4.style.background = "rgb(255, 148, 148)";
      showCorrectAnswer();
      setTimeout(showNextQuestion, 2000);
      endGame();
    }
  });
};

const showCorrectAnswer = () => {
  if (a1.innerHTML == correctAnswer) {
    a1.style.background = "rgb(217, 255, 160)";
  } else if (a2.innerHTML == correctAnswer) {
    a2.style.background = "rgb(217, 255, 160)";
  } else if (a3.innerHTML == correctAnswer) {
    a3.style.background = "rgb(217, 255, 160)";
  } else if (a4.innerHTML == correctAnswer) {
    a4.style.background = "rgb(217, 255, 160)";
  }
};

const scoreCal = () => {
  if (score <= 100) {
    document.querySelector("#id_score").innerHTML = score;
  }
};

const endGame = () => {
  if (endnum < 0) {
    setTimeout(() => {
      document.querySelector("#id_question").innerHTML = `
        <h1 class="endgame" >Game is Ended<h1>
        <img onClick="window.location.reload();" class="img_startGame" src="images/startGame.png" alt="start the game">
      `;
    }, 1000);
  }
};

export const showQuestion = (_itemQ) => {
  // itemQ = השאלה עצמה עם 5 מאפיינים
  // מייצר מערך מקומי בשביל לערבב את התשובות
  let ar = [_itemQ.a1, _itemQ.a2, _itemQ.a3, _itemQ.a4];
  ar = _.shuffle(ar);

  // מגדיר שהמשתנה הנל שהוא גלובלי לקובץ שווה
  // לתשובה הנכונה
  // _itemQ.a1 -> איי 1 תמיד הוא התשובה הנכונה
  correctAnswer = _itemQ.a1;

  q.innerHTML = _itemQ.q;
  // מדפיס את התשובות לפי הסדר החדש של הערבוב במערך
  a1.innerHTML = ar[0];
  a2.innerHTML = ar[1];
  a3.innerHTML = ar[2];
  a4.innerHTML = ar[3];
};
