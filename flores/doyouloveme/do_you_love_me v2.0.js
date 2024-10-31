const questionContainer = document.querySelector(".question-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const heartLoader = document.querySelector(".cssload-main");
const yesResultContainer = document.querySelector(".result-container.yes");
const noResultContainer = document.querySelector(".result-container.no");
const gifResult = document.querySelector(".gif-result");
const restartBtns = document.querySelectorAll(".restart-btn");

function result(questionContainer, heartLoader, resultContainer, gifResult) {
  questionContainer.style.display = "none";
  resultContainer.style.display = "inherit";
  gifResult.play();
}

// yes button functionality
yesBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, yesResultContainer, gifResult);
});

//no button functionality
noBtn.addEventListener("click", () => {
  result(questionContainer, heartLoader, noResultContainer, gifResult);
});

// restart button functionality
restartBtns.forEach((button) => {
  button.addEventListener("click", () => {
    heartLoader.style.display = "inherit";
    yesResultContainer.style.display = "none";
    noResultContainer.style.display = "none";

    const timeoutId = setTimeout(() => {
      questionContainer.style.display = "inherit";
      heartLoader.style.display = "none";
    }, 3000);
  });
});
