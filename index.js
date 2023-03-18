//Making request to the server and fetching the resources using fetch() with Async/await from Quote Garden API

//holding the required target elements in a variables
const quoteElemnt = document.getElementById("quote");
const authorElement = document.getElementById("author");
const buttonElement = document.getElementsByTagName("button")[1];

const getQuotes = async () => {
  try {
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes?limit=1000"
    );
    const data = await response.json();

    const min = 1;
    const max = 1000;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    const quote = data.data[random].quoteText;
    const author = data.data[random].quoteAuthor;

    quoteElemnt.innerText = quote;
    authorElement.innerText = author;
  } catch (error) {
    console.log(`The error is: ${error}`);
  }
};

getQuotes();

//Adding EventListner for next quote when the button clicked
buttonElement.addEventListener("click", getQuotes);
