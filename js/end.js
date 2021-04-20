const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore_git');

//from start highscores is empty
const highScores =  JSON.parse(localStorage.getItem("highScores")) || [];

finalScore.innerText = mostRecentScore;
username.addEventListener('keyup',e=>{  
    saveScoreBtn.disabled = !username.value;
})

saveHighScore = (e) =>{
    e.preventDefault();

    const score = {
        score:mostRecentScore,
        name:username.value
    };
    
    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score )
    
    highScores.splice(5);

    console.log(highScores);
    localStorage.setItem("highScores",JSON.stringify(highScores));
    window.location.assign("../index.html");
}