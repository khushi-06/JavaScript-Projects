const genrerateMemeBtn =document.querySelector(
    ".meme-generator .generate-meme-btn"
    );
const memeImage= document.querySelector(".meme-generator img");
const memeTitle= document.querySelector(".meme-generator .meme-title");
const memeAuthor= document.querySelector(".meme-generator .meme-author");

const updatedetails=(url, title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
};

const genrerateMeme=() =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) =>response.json())
    .then( (data) => {
        updatedetails(data.url,data,title.data.author);
    });
};

genrerateMemeBtn.addEventListener("click",genrerateMeme);