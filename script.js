var ticTacToe=[0,0,0,0,0,0,0,0,0];

function check(){

    for(var i=0;i<3;i++){
        //Checking Rows
        if(ticTacToe[3*i]==="X" && ticTacToe[3*i+1]==="X" && ticTacToe[3*i+2]==="X"){
            for(var j=0;j<3;j++){
                document.getElementById(3*i+j).style.color="green";
            }
            return;
        }
        //Checking Columns;
        if(ticTacToe[i]==="X" && ticTacToe[i+3]==="X" && ticTacToe[i+6]==="X"){
            for(var j=0;j<3;j++){
                document.getElementById(i+3*j).style.color="green";
            }
            return;
        }  
    }
    //Checking for diagonals
    if(ticTacToe[0]==="X" && ticTacToe[4]==="X" && ticTacToe[8]==="X"){
        for(var j=0;j<9;j+=4){
            document.getElementById(j).style.color="green"
        }
        return;
    }
    if(ticTacToe[2]==="X" && ticTacToe[4]==="X" && ticTacToe[6]==="X"){
        for(var j=0;j<7;j+=2){
            document.getElementById(j).style.color="green"
        }
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