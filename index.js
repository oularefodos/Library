let myLibrary = [];
let open = false;

function Book(title, content) {
  this.id = myLibrary.length;
  this.tiitle = title;
  this.content = content;
  this.isRead = false;
}

function addBookToLibrary(title, content) {
    if (title != "" && title != undefined &&  content != "" && content != undefined)
    {
        myLibrary.push(new Book(title, content));
        return true;
    }
    else
        return (false);
}

function displayBook() {
    
}

let addBook = document.querySelector(".btn-addBook");

addBook.addEventListener("click", () => {
    if (open)
    {
        document.body.classList.remove("ok")
        open = false
    }
    else
    {
        document.body.classList.add("ok")
        open = true;
    }
})

let submit = document.querySelector(".submit");
submit.addEventListener("click", e => {
    e.preventDefault();
    let title = document.getElementById("title");
    let conten = document.getElementById("title");
    if (!addBookToLibrary(title.value, content.value))
        alert("erreur")
    else
    {
        title.value = ""
        content.value = ""
    }
})
