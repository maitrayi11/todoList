showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let textBar = document.getElementById("textBar");
    let notes = window.localStorage.getItem("findNotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(textBar.value);
    window.localStorage.setItem("findNotes", JSON.stringify(notesObj));
    textBar.value = "";
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("findNotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="row">
        <div class="column">
       <p> ${index + 1}.<br>
        ${element}</p><br> 
        <button class="delBtn" id=${index} onclick= "deleteNote(this.id)"><i class="fa fa-trash"></i></button>
        </div>
        </div>
        `
    });
    let text = document.getElementById("findNotes");
    if (notesObj.length != 0)
        text.innerHTML = html;
    else
        text.innerHTML = "nothing to show in the notes";
}

function deleteNote(index) {

    let notes = localStorage.getItem("findNotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("findNotes", JSON.stringify(notesObj));
    showNotes();
}





// let searchBox = document.getElementById("searchBox");

// searchBox.addEventListener('input', function () {
//     let inpVal = searchBox.value;
//     console.log(inpVal);
//     let row = document.getElementsByClassName('row');
//     Array.from(row).forEach(function (elements) {
//         let txt =   element.getElementByTagName("p")[0];
//         console.log(txt);
//     })
// });

// //46:00