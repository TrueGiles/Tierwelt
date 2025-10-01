//EUropa
//i know this sucks but im to lazy
const EU1 = ["../assets\\Pfailnater.jpeg","../assets\\Pfailnater_2.jpeg", "../assets\\Pfailnater_3.Jpeg"]
let EU1N = 0;
function changeImageEU1(){
++EU1N;
if(EU1N >= 3){
    EU1N = 0;
}
document.getElementById("EU1").src = EU1[EU1N]; 
}

const EU2 = ["../assets\\Huffeisennater.jpg","../assets\\Huffeisennater_2.jpg","../assets\\Huffeisennater_3.jpg"]
let EU2N = 0;
function changeImageEU2(){
++EU2N;
if(EU2N >= 3){
    EU2N = 0;
}
document.getElementById("EU2").src = EU2[EU2N] 
}

//asien

const AS1 = ["../assets\\Gemeine_Sandrasselotter.jpg","../assets\\Gemeine_Sandrasselotter_2.jpg","../assets\\Gemeine_Sandrasselotter_3.jpg"]
let AS1N = 0;
function changeImageAS1(){
++AS1N;
if(AS1N >= 3){
    AS1N = 0;
}
document.getElementById("AS1").src = AS1[AS1N]; 
}

const AS2 = ["../assets\\kobra_1.jpg","../assets\\kobra_2.jpg","../assets\\kobra_3.jpg"]
let AS2N = 0;
function changeImageAS2(){
++AS2N;
if(AS2N >= 3){
    AS2N = 0;
}
document.getElementById("AS2").src = AS2[AS2N] 
}

