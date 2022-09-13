//console.log("app.js")

showNote()

let title = document.querySelector("#title");
let text = document.querySelector("#text");
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click" , function(){
    let noteObj ={
        noteTitle : title.value,
        noteText : text.value
    };
    
    let localNote = localStorage.getItem("myNote");
    //console.log(localNote)
    
    if(localNote == null){
       noteArr = [];
    }else{
       noteArr = JSON.parse(localNote);
    }
    
    noteArr.push(noteObj);
    //console.log(noteArr[0]);
    
    
    title.value=""
    text.value=""
    //console.log(noteObj.noteTitle + noteObj.noteText)
    
    localStorage.setItem("myNote", JSON.stringify(noteArr));
    
    showNote()
})



function showNote(){
   let localNote = localStorage.getItem("myNote");
   
   if(localNote == null){
   noteArr = [];
   }else{
   noteArr = JSON.parse(localNote);
   }
   
   let html=""
   
   noteArr.forEach(function(item,index){
         html += `<div id="note" >
                       <h3>${index+1}] ${noteArr[index].noteTitle}</h3>
                       <p id="my${index}" onClick="editNote(this.id)">${noteArr[index].noteText }</p>
                       <button id="${index}" onClick="deleteNote(this.id)">Delete</button>
                  </div>`;
   })
   
   let notesSection = document.querySelector("#noteSection");
   
   if(noteArr != 0){
       notesSection.innerHTML = html
   }
   else{
       notesSection.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
   }
}



function deleteNote(index){
   let localNote = localStorage.getItem("myNote");
   
   if(localNote == null){
      noteArr = [];
   }else{
      noteArr = JSON.parse(localNote);
   };
   
   noteArr.splice(index,1);
   
   localStorage.setItem("myNote", JSON.stringify(noteArr));
   
   showNote()
}

function editNote(index){
   console.log("siddhesh")
   
   let p=document.getElementById("#my${index}")
   
   p.innerHTML = `<textarea class="textarea" ></textarea>`
}

