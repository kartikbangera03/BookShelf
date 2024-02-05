const myLibrary = [];

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages =  pages;
        this.read = read;
    }
}


function addBookToLibrary(i){
    const cardContainer = document.querySelector(".card-container");
    const postElement = document.createElement("div");
    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");

    const checkInput  = document.createElement("input");
    checkInput.type = "checkbox";
    checkInput.name = "readStatus";
    checkInput.value="value";
    checkInput.id="readStatus";
    checkInput.checked = myLibrary[i].read;
    let label = document.createElement('label');
    label.htmlFor = "readStatus";
    label.appendChild(document.createTextNode('Read Status'));


    postElement.classList.add("cards");
    
    pTitle.innerText = myLibrary[i].title;
    pAuthor.innerText = myLibrary[i].author;
    pPages.innerText = myLibrary[i].pages;

    console.log(pRead.innerText);
    
    cardContainer.appendChild(postElement);
    postElement.appendChild(pTitle);
    postElement.appendChild(pAuthor);
    postElement.appendChild(pPages);
    
    postElement.appendChild(checkInput);
    postElement.appendChild(label);
    
    
 


}

const dialog = document.querySelector("dialog");
const showButton =  document.querySelector(".nav-bar > button");
const closeButton  = document.querySelector("dialog button");

//show the dialgue button opens the dialog modally

showButton.addEventListener("click", ()=>{
    dialog.showModal();
});

const titleValue = document.querySelector("#title");
const authorValue = document.querySelector("#author");
const pagesValue = document.querySelector("#pages");
const readValue= document.querySelector("#readStatus");


closeButton.addEventListener("click",()=>{
    event.preventDefault()
    let bookObj = new Book(titleValue.value, authorValue.value, pagesValue.value, readValue.checked);
    myLibrary.push(bookObj);

    addBookToLibrary(myLibrary.length-1);
    dialog.close();
});




