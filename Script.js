const Question_Data = [
    {
     question: "Qu'est-ce que Java ?",
     r:[  "Un système d'exploitation","Un langage de programmation","Un navigateur web", "Un framework JavaScript"],
     correct: "Un langage de programmation"
    },
     {
     question: "Comment déclarer une variable en Java ?",
     r:[  "var myVariable = 10;","let myVariable = 10;","int myVariable = 10;","myVariable = 10;"],
     correct: "int myVariable = 10;"
    },
     {
     question: "Quel mot-clé est utilisé pour hériter d'une classe en Java ?",
     r:["extend","inherits","implements","super"],
     correct: "extend"
    },
     {
     question: "Comment importer une classe dans Java ?",
     r:["import MyClass;","include MyClass;","require MyClass;", "import java.MyClass;"],
     correct: "import java.MyClass;"
    },
     {
     question: "Comment déclarer un tableau (array) en Java ?",
     r:[ "array myArray = new array();","int[] myArray = new int[];","int[] myArray = new int[] {};","int[] myArray = new int[5];"],
     correct: "int[] myArray = new int[5];"
    },
     {
     question: "Comment terminer une instruction en Java ?",
    r:["Avec un point-virgule ;","Avec un point .","Avec une virgule ,","Avec un deux-points :"],
     correct: "Avec un point-virgule ;"
    },
   
   ];

   const question = document.getElementById("Q");
   const container = document.getElementById("case1");
   let i = 0;
   let valider = document.getElementById("submit-btn");

function showData(){
    question.innerHTML = Question_Data[i].question;
    for(let j = 0; j < Question_Data[i].r.length; j++){
        container.innerHTML += `
        <button id="A" class="A">${Question_Data[i].r[j]}</button>
        `
        
    }
    valider.disabled = true;
} 
showData();

function ChangeData(){
   
        valider.addEventListener("click",function(){
           nextQuestions();
           checkData();
        })
    }

ChangeData();



function nextQuestions(){
    container.innerHTML ="";
    i++; // Incrémente i après l'affichage de la nouvelle question
    if (i < Question_Data.length) {
        showData();
    } else {
        showScore();
    }
}


let score = document.getElementById("score");
let sc = 0;
let valid = false;

function checkData(){
    document.querySelectorAll(".A").forEach((element)=>{
        element.addEventListener("click", () =>{
            if(element.innerHTML == Question_Data[i].correct){
                valider.disabled = false;
                element.style.background = "green";
                element.style.color = "white";
                element.disabled = true;
                sc += 10;
                score.innerHTML = "Score: " + sc;
                document.querySelectorAll(".A").forEach((e)=>{
                    if(e.style.background != "green"){
                        e.disabled = true;
                    }
                });
            }else{
                // Trouver l'élément avec la réponse correcte et le rendre vert
                document.querySelectorAll(".A").forEach((e)=>{
                    if(e.innerHTML == Question_Data[i].correct){
                        e.style.background = "green";
                        e.style.color = "white";
                        e.disabled = true;
                    }
                });
                element.style.background = "red";
                element.style.color = "white";
                document.querySelectorAll(".A").forEach((e)=>{
                    if(e.style.background != "red"){
                        e.disabled = true;
                        valider.disabled = false;
                    }
                });
            }
        });
    });
}

checkData();

function showScore() {
    container.innerHTML = "";
    question.innerHTML = "Félicitations! Vous avez terminé le quiz!";
    score.innerHTML = "Score final: " + sc;
    valider.disabled = true;
    restartButton.style.display = "block";
    valider.style.display= "none";
}

function restartQuiz() {
    i = 0;
    sc = 0;
    score.innerHTML = "Score: " + sc;
    showData();
    valider.style.display="block";
    restartButton.style.display = "none";
    checkData();
}
const restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click", function() {
    restartQuiz();
});























