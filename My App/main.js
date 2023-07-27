// all variables
const addBtn = document.getElementById('addBtn'); //get button element from html
const addTitle = document.getElementById('addTitle');// get title textbox element from html
const addDescription = document.getElementById('addDescription');// get description textarea element from html
const notesBox = document.getElementById('notesBox');// get div element where we want to display notes form html
const notePriority = document.getElementsByName('notePriority');
let noteBG;
// all functions
function dispNotes(){        
    let allNotes = localStorage.getItem('notes'); 
    if(allNotes == null){
        notesBoxArr = [];                        
    }else{
        notesBoxArr = JSON.parse(allNotes);
        notesBox.innerHTML = ``;// clear div element where we want to display notes
        notesBoxArr.forEach(function(e,i){        
            notesBox.innerHTML += `
            <div class="p-3 col-lg-auto rounded  ${e.bg}">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Note : ${i+1}</h6>
                        <p class="card-text">${e.description}</p>
                        <button id="${i}" type="button" class="btn btn-outline-danger" onclick="deleteNote(this.id)">Delete Note</button>                        
                    </div>
                </div>
            </div>`;
        });
    }        
}
function deleteNote(index){    
    let allNotes = localStorage.getItem('notes');    
    notesArr = JSON.parse(allNotes);    
    notesArr.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesArr));
    dispNotes();
}
// the application
dispNotes();
addBtn.addEventListener("click",function(){
    notePriority.forEach(function(priority){
        if(priority.checked){
            noteBG = priority.value;
        }
    })
    let theTitle = addTitle.value;   
    let theDescription = addDescription.value;
    if(theTitle !='' && theDescription !=''){
        let allNotes = localStorage.getItem('notes'); 
        if(allNotes == null){
            notesArr = [];                        
        }else{
            notesArr = JSON.parse(allNotes);            
        }        
        notesArr.push({title:theTitle,description:theDescription,bg:noteBG});
        localStorage.setItem("notes", JSON.stringify(notesArr));
        dispNotes();
    }    
});

