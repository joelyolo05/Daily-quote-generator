const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEL = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"

async function getQuote(){

    try {
        btnEl.innerText = "loading...";
        btnEl.disabled = true
        quoteEl.innerText = "Updating..."
        authorEL.innerText = "Updating..."
        const response = await fetch(apiURL)
        const data =  await response.json()
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEL.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a daily quote";
        btnEl.disabled = false;
        console.log(data);  
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorEL.innerText = "An error happened";
        btnEl.disabled = false;

    }

}



btnEl.addEventListener("click", getQuote)