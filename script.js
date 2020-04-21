var ticTacToe=[0,0,0,0,0,0,0,0,0];

function check(){

    for(var i=0;i<3;i++){
        //Checking Rows
        if(ticTacToe[3*i]==="X" && ticTacToe[3*i+1]==="X" && ticTacToe[3*i+2]==="X"){
            
            console.log("Row");
            return;
        }
        //Checking Columns;
        if(ticTacToe[i]==="X" && ticTacToe[i+3]==="X" && ticTacToe[i+6]==="X"){
            console.log("Column");
            return;
        }
    }
    //Checking for diagonals
    if((ticTacToe[0]==="X" && ticTacToe[4]==="X" && ticTacToe[8]==="X") || (ticTacToe[2]==="X" && ticTacToe[4]==="X" && ticTacToe[6]==="X")){
        console.log("Diagonal");
        return;
    }
}
var table=document.querySelector("table");
table.addEventListener("click", function(event){
    var id = event.srcElement.id
    document.getElementById(id).innerHTML="<p>X</p>"
    ticTacToe[id]="X";
    check();
})