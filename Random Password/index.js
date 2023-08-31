const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function randomChar() {
    let randchar = Math.floor(Math.random()*characters.length)
    return characters[randchar]
}
let firstPass=""
let secondPass = ""
function passGen(){
    firstPass.textContent=""
    secondPass.textContent =""
    passGen1()
    passGen2()
    function passGen1(){
        firstPass = document.getElementById("pass1")
        firstPass.textContent=""
        for(let i=1; i<13; i++){
            
                firstPass.textContent += randomChar() 

            }
    }

    function passGen2(){
        secondPass =document.getElementById("pass2")
        secondPass.textContent =""
            for(let i=1; i<13; i++){
                secondPass.textContent += randomChar() 
            }
    }
}