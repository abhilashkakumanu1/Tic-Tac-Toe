var ticTacToe=[0,0,0,0,0,0,0,0,0];
var count=0;
var symbol="X";

function check(){

    for(var i=0;i<3;i++){
        //Checking Rows
        if(ticTacToe[3*i]===symbol && ticTacToe[3*i+1]===symbol && ticTacToe[3*i+2]===symbol){
            for(var j=0;j<3;j++){
                document.getElementById(3*i+j).style.color="blue";
            }
            return true;
        }
        //Checking Columns;
        if(ticTacToe[i]===symbol && ticTacToe[i+3]===symbol && ticTacToe[i+6]===symbol){
            for(var j=0;j<3;j++){
                document.getElementById(i+3*j).style.color="blue";
            }
            return true;
        }  
    }
    //Checking for diagonals
    if(ticTacToe[0]===symbol && ticTacToe[4]===symbol && ticTacToe[8]===symbol){
        for(var j=0;j<9;j+=4){
            document.getElementById(j).style.color="blue";
        }
        return true;
    }
    if(ticTacToe[2]===symbol && ticTacToe[4]===symbol && ticTacToe[6]===symbol){
        for(var j=0;j<7;j+=2){
            document.getElementById(j).style.color="blue";
        }
        return true;
    }
}
var table=document.querySelector("table");
table.addEventListener("click", function(event){
    var id = event.srcElement.id
    document.getElementById(id).innerHTML="<p>"+symbol+"</p>";
    ticTacToe[id]=symbol;

    if(check()===true || count===8){
        this.removeEventListener('click',arguments.callee,false);
        var btn = document.createElement("BUTTON");   
        btn.innerHTML = "New game";                 
        document.body.appendChild(btn);
        btn.addEventListener("click", function(){
            window.location.reload();
        })  
    }
    count++;
    if(count%2===0){
        symbol="X";
    }
    else{
        symbol="O"
    }

})