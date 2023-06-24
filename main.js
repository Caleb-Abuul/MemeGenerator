const genMemeBtn = document.querySelector(".meme-gen .btn");
const memeImg = document.querySelector(".meme-gen img");
const memeTitle = document.querySelector(".meme-gen .meme-title");
const memeAuthor = document.querySelector(".meme-gen .meme-author");

const updateDetails = (url, title, author) => {
  memeImg.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) => {
    updateDetails(data.url, data.title, data.author);
  });
};

genMemeBtn.addEventListener("click", generateMeme);

generateMeme();