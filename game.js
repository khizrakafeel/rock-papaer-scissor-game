   let score=JSON.parse(localStorage.getItem('score'))||{
        win:0,
        lose:0,
        tie:0,
    }
    updateScore()

    function ResetScore(){
        score.win=0,
        score.lose=0,
        score.tie=0
        localStorage.removeItem('score');
        updateScore()
    }

     function playgame(playerMove){
     const computerMove= pickComputerMove()
     let result='';

     if (playerMove==='Rock'){
      if (computerMove==='rock'){
        result='tie'
      }
    if (computerMove==='paper'){
        result='lose'
    }
    if (computerMove==='scissor'){
        result='win'
    }
     }
    else if(playerMove==='Paper'){
        if (computerMove==='rock'){
            result='win'
        }
        if (computerMove==='paper'){
        result='tie'
    }
    if (computerMove==='scissor'){
        result='lose'
    }
    }
    else if(playerMove==='Scissor'){
        if (computerMove==='rock'){
            result='lose'}
    if (computerMove==='paper'){
        result='win'
    }
    if (computerMove==='scissor'){
        result='tie'
    }
    }

    if (result==='win'){
        score.win+=1
    }
    else if (result==='lose'){
        score.lose+=1
    }
    else{
        score.tie+=1
    }

    document.querySelector('.result').innerHTML=`Result:${result}`
    // document.querySelector('.score').innerHTML=`Wins:${score.win}, Lose:${score.lose}, Tie:${score.tie}`
    updateScore()

    console.log(score);
    
    let scoreStr=JSON.stringify(score)
    console.log(scoreStr);
    
    localStorage.setItem('score',scoreStr)

    console.log(`Your move: ${playerMove}
    computer move: ${computerMove}
    Match: ${result}`);
    // alert (`you picked: ${playerMove},computer picked:${computerMove}`);
    return computerMove;
}

function updateScore(){
    document.querySelector('.score').innerHTML=`Wins:${score.win}, Lose:${score.lose}, Tie:${score.tie}`

}

function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';

    if (randomNumber>=0 && randomNumber <1/3)
    {
        computerMove='rock'}
     else if (randomNumber>=1/3 && randomNumber <2/3)
    {
        computerMove='paper'}
    else
    {
        computerMove='scissor'}
    return computerMove;
}