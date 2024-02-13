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
  question.innerHTML ="<h2>Wow. I cant beleive you would do that.</h2>";
  gif.src = "https://tenor.com/en-GB/view/catsad-gif-10975270751505630184";
  noBtn.innerHTML = "";
});

