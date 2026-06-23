let questionInput=document.querySelector(".question")
let optionContainer=document.querySelector(".options")
let questionOptions=document.querySelectorAll(".option")
let submitButton=document.querySelector(".submit")
let questions=[
    {"question":"When was Pakistan Formed?","Option_1":"1978","Option_2":"1980","Option_3":"1947","Option_4":"1945","correct":"1947"},
    {"question":"Which key 2015 nuclear deal did the US exit in 2018?","Option_1":"NATO","Option_2":"JCPOA","Option_3":"NAFTA","Option_4":"SALT","correct":"JCPOA"},
    {"question":"In which water body do US-Iran naval standoffs usually happen?","Option_1":"Persian Gulf","Option_2":"Red Sea","Option_3":"Baltic Sea","Option_4":"Black Sea","correct":"Persian Gulf"},
    {"question":"Which strategic chokepoint does Iran threaten to close during tensions?","Option_1":"Suez Canal","Option_2":"Panama Canal","Option_3":"Strait of Hormuz","Option_4":"Malacca Strait","correct":"Strait of Hormuz"},
    {"question":"Which Iranian commander was assassinated by a US drone strike in 2020?","Option_1":"Qasem Soleimani","Option_2":"Javad Zarif","Option_3":"Ali Khamenei","Option_4":"Ebrahim Raisi","correct":"Qasem Soleimani"},
    {"question":"What major economic tactic does the US heavily use against Iran?","Option_1":"Free trade","Option_2":"Sanctions","Option_3":"Subsidies","Option_4":"Tariffs","correct":"Sanctions"}
]
let count=0;
let selectedAnswer;
let score=0;
function showQuestion(){
    if(count<questions.length){
          selectedAnswer=" "
questionInput.textContent = questions[count]["question"]
    for( i=0;i<questionOptions.length;i++){
    questionOptions[i].textContent=questions[count]["Option_"+(i+1)]
}
    }
    else{
        questionInput.classList.add("result-animation")
        questionInput.textContent = "Quiz Completed! Your Score: " + score + "/" + questions.length
        optionContainer.style.display = "none"
        submitButton.style.display = "none"
    }

}

optionContainer.addEventListener("click",(e)=>{
    console.log(e.target.innerHTML)
         selectedAnswer=e.target.innerHTML
        
    
})
    submitButton.addEventListener("click", (e)=>{
        if(selectedAnswer==" "){
            alert("First select an option")
        }
        if(selectedAnswer==questions[count]["correct"]){
            score++;
        }
        else{
          
            score=score;
        }
        console.log(score)
        count++
        showQuestion();
    })

showQuestion();
 