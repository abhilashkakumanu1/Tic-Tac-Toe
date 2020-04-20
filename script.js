var table=document.querySelector("table");
table.addEventListener("click", function(event){
    document.getElementById(event.srcElement.id).innerHTML="<p>X</p>"
})