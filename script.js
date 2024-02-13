const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");

yesBtn.addEventListener("click", () => {
  question.innerHTML ="<h2>Correct! Good Answer. I love you so much!</h2>";
  gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGkxc3A2ZzJ6Y3ppMGNmMms0NjU3cTh3YzhvYjE4NDVsMjllcGd5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fq00idJgaECCk/giphy.gif";
  noBtn.innerHTML = "";
});

noBtn.addEventListener("click", () => {
  question.innerHTML ="<h2>Wow. That is actually so mean. I can't believe you. I'll never have a valentine.</h2>";
  gif.src = "https://media1.tenor.com/m/mE_-mVk6Q-gAAAAd/catsad.gif";
  yesBtn.innerHTML = "";
});

