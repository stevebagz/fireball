import React, { useState } from 'react';
import './App.css'

function HeaderComponent() {
  const greeting = "Get Burned!";
  return <h1>{greeting}</h1>;
}

function Fireball() {
  return(
  <div className='fireballContainer'>
    <img 
      src='/fireball2.png'
      alt="fireball"
      id="fireball"
    />
  </div>
  )
}

function InstructionsComponent() {
  return <h3>How many fireballs can you take before you die a hideous death!?</h3>
}

function GameDiv() {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [hitPoints, setHitPoints] = useState(100);
  let randomNumber = Math.floor(Math.random() * 15);

  function handleClick() {
    setGameStart(true);
  }
 
  function handleClickInGame() {
    setHitCount(hitCount + 1);
    setHitPoints(hitPoints - randomNumber)
  }

if (!gameStart) {
  return (
    <div className="game-div">
    <button id="start-button" className='button' onClick={handleClick}>Begin!</button>
    </div>
  )
}

if (gameOver) {
  return (
    <div className="game-div">
      You finally succumbed to the scorching heat.  It took {hitCount} fireballs to kill you.
      <button className='button' id='reload-button' onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )
}

if (hitPoints < 1) {
  setGameOver(true);
}

if (gameStart) {
  return (
    <div className="game-div">
      <button id="fight-button" className='button' onClick={handleClickInGame}>Take a blast!</button>
      <ul>
        <li>
          Health: {hitPoints}
        </li>
        <li>
          Hits Taken: {hitCount}
        </li>
      </ul>
    </div> 
  )
}

  let gameArea = gameStart ? (
    <div className="game-div">
      <button id="fight-button" className='button' onClick={handleClickInGame}>Take a blast!</button>
      <ul>
        <li>
          Health: {hitPoints}
        </li>
        <li>
          Hits Taken: {hitCount}
        </li>
      </ul>
    </div> 
  ) : 
    <div className="game-div">
      <button id="start-button" className='button' onClick={handleClick}>Begin!</button>
    </div>

    return gameArea;
    }
  



function App() {
  return (
    <div>
      <HeaderComponent />
      <Fireball />
      <InstructionsComponent />
      <GameDiv />
    </div>
  )
}

export default App;