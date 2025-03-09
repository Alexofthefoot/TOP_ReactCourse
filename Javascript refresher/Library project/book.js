const myLibrary = [];
let CURRENT_ID = 0;

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.identifier = CURRENT_ID;
        CURRENT_ID++;
    }
    get isRead() {
        return this._isRead;
    }

    get infoString() {
        let string = `${this.title}, written by ${this.author} has ${this.pages} pages and `;
        if (this.isRead) {
            string += "has been read.";
        }
        else {
            string += "has not been read.";
        }
        return string;
    }
    set isRead(bool) {  
        console.log("setter called") 
        this._isRead = bool;
    }
}

function updateWebpage(book) {
    const container = document.getElementById('library-container');
    //The div container
    let newDiv = document.createElement("div");
    newDiv.className = "card";
    container.appendChild(newDiv);
    //text element
    let newP = document.createElement("p") 
    newP.innerHTML = book.infoString;
    newDiv.appendChild(newP);
    //toggle button 
    let button = document.createElement("button")
    button.innerHTML = "Toggle Read Status"
    button.type = "button"
    button.id = book.identifier
    button.onclick = function() {changeReadStatus(this)};
    newDiv.appendChild(button)
    //delete button
    button = document.createElement("button")
    button.innerHTML = "Remove"
    button.type = "button"
    button.onclick = function(){removeParent(this)};
    newDiv.appendChild(button);
}

function displayForm() {
    document.getElementById('form-container').style.display = 'block';
}

function changeReadStatus(button) {
    // change value in the library array
    let idx = myLibrary.findIndex((book) => book.identifier == button.id)
    let book = myLibrary[idx]
    let bool = book.isRead;
    book.isRead = !bool;
    // change what the html displays 
    let parent = button.parentNode
    let p = parent.firstElementChild
    p.innerHTML = book.infoString;
    
}

function hideForm() {
    document.getElementById('form-container').style.display = 'none';
}

function removeParent(button) {
    button.parentNode.remove();
}

document.getElementById("new-book").addEventListener("submit", submitForm);

    async function submitForm(event) {
      event.preventDefault();
      let book = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").value)
      myLibrary.push(book)
      updateWebpage(book)
      document.getElementById("new-book").reset();
    }
  
function initialSetup() {
    let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true)
    let book2 = new Book("Dune","Frank Herbert",412,false)
    let book3 = new Book("Pride and Prejudice", "Jane Austen", 279, false)
    let book4 = new Book("The Catcher in the Rye", "J.D.Salinger", 277, false)
    let book5 = new Book("1984", "George Orwell", 328, true)
    myLibrary.push(book1, book2, book3, book4, book5)
    updateWebpage(book1)
    updateWebpage(book2)
    updateWebpage(book3)
    updateWebpage(book4)
    updateWebpage(book5)
    console.log(myLibrary)
}

initialSetup()