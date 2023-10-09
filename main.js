var XO = document.getElementById("XO")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
var button5 = document.getElementById("button5")
var button6 = document.getElementById("button6")
var button7 = document.getElementById("button7")
var button8 = document.getElementById("button8")
var button9 = document.getElementById("button9")

function selectSquare(){
    if(this.innerHTML !== "") return;
    this.innerHTML = XO.value;
    if( XO.value === "X"){
        XO.value = "O"
        this.style.color = "blue"
        this.style.fontSize = "35px";
    }
    else{
        XO.value = "X"
        this.style.color = "red"
        this.style.fontSize = "35px";
    }
    
    checkWin()
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(`button${i}`).onclick = selectSquare
    
}


function resetGame(){
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`button${i}`).innerHTML = "";
        document.getElementById(`button${i}`).style.backgroundColor = "";
        XO.innerHTML =  '<option value="X">X</option>\n        <option value="O">O</option>'

    }
    
    $("#gif").empty()
}



function addingCounter(){
var counterX = 0
var counterO = 0
   return  function check3Buttons(b1, b2 ,b3){
    if (b1.innerHTML !== "" && b2.innerHTML === b1.innerHTML && b3.innerHTML === b1.innerHTML && XO.innerHTML !== ""){
        b1.style.backgroundColor = "limegreen";
        b2.style.backgroundColor = "limegreen";
        b3.style.backgroundColor = "limegreen";
       
        if(b1.innerHTML === "O"){
            ++counterO
            document.getElementById("counterO").innerHTML = counterO
            $("#gif").append(`<p>playerO</p><br><img src="https://media3.giphy.com/media/o75ajIFH0QnQC3nCeD/200.webp?cid=ecf05e47w0wz2kbdbegit00qa7d93yy351tgu5wp4igvwnyg&ep=v1_gifs_search&rid=200.webp&ct=g" alt="gif">`)
        }
        if(b1.innerHTML === "X"){
            ++counterX
            document.getElementById("counterX").innerHTML = counterX
            $("#gif").append(`<p>playerX</p><br><img src="https://media3.giphy.com/media/o75ajIFH0QnQC3nCeD/200.webp?cid=ecf05e47w0wz2kbdbegit00qa7d93yy351tgu5wp4igvwnyg&ep=v1_gifs_search&rid=200.webp&ct=g" alt="gif">`)
            
        }
        XO.innerHTML = ""
        
 
        }
    }

}
 
var check3Button = addingCounter()

 function  checkWin(){
    check3Button(button1,button2,button3)
    check3Button(button1,button4,button7)
    check3Button(button1,button5,button9)
    check3Button(button2,button5,button8)
    check3Button(button4,button5,button6)
    check3Button(button7,button8,button9)
    check3Button(button3,button6,button9)
    check3Button(button3,button5,button7)

}
 
document.getElementById("buttonReset").onclick = resetGame