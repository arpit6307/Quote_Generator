const text=document.getElementById("quote");
const author=document.getElementById("author");
const instagramButton=document.getElementById("instagram");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;
    
    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }
 
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    //tweet the quote
    instagramButton.href="https://www.instagram.com/arpit__8887/"+quote+" ~ "+auth;

}

getNewQuote();