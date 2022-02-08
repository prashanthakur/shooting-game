import './App.css'
import {useEffect, useState} from 'react'
import { motion } from "framer-motion";

function App() {
  const [powerOne,setPowerOne] = useState(100);
  const [powertwo,setPowertwo] = useState(100);
  const [playeroneHealth, setplayeroneHealth] = useState(100)
  const [playertwoHealth, setplayertwoHealth] = useState(100)
  const [scoreOne,setScoreOne] = useState(0)
  const [scoreTwo,setScoreTwo] = useState(0)
  const [winnerText,setwinnerText] = useState(false)

  const [animation,setAnimation] = useState(false)
  const [animationright,setAnimationright] = useState(false)

  useEffect(()=>{
    if(scoreOne >=3 ){
      alert("Player 1 wins this tournament")
    }else if(scoreTwo >= 3){
      alert("player 2 wins overall tournamnet")
    }else{
      //alert("draw")
    }
  },[scoreOne,scoreTwo])

  const startGame = () => {
    setScoreOne(0)
    setScoreTwo(0)
    setplayeroneHealth(100)
    setplayertwoHealth(100)
  }

  const Shooting = () => {
    if(powerOne > 0){
      setAnimation(!animation)
      var damage = Math.floor(Math.random()*100)
      if(powerOne - damage < 0){
        alert("Player 1 wins this round !")
        setScoreOne(scoreOne + 1)
        setplayertwoHealth(100)
        setPowerOne(100)
        setwinnerText(true)
      }else{
        setplayertwoHealth(powerOne - damage)
        setPowerOne(powerOne - damage)
      }
    
      
    }else{
      setPowerOne(100)
      setScoreOne(scoreOne + 1)
      alert("Player 1 wins")
      setplayertwoHealth(100)
      setplayeroneHealth(100)
    }
    
  }


  const ShootingTwo = () => {
    if(powertwo > 0){
      setAnimationright(!animationright)
      var damage = Math.floor(Math.random()*100)
      if(powertwo - damage < 0){
        alert("Player 2 wins this round !")
        setScoreTwo(scoreTwo + 1)
        setplayeroneHealth(100)
        setPowertwo(100)
      }else{
        setplayeroneHealth(powertwo - damage)
        setPowertwo(powertwo - damage)
      }
    
      
    }else{
      setPowertwo(100)
      setScoreTwo(scoreTwo + 1)
      alert("Player 2 wins")
      setplayertwoHealth(100)
      setplayeroneHealth(100)
    }
    
  }



  return (
    <>
    <h3 className='text-center'><a href="https://github.com/prashanthakur" target="_blank" className='text-center'>View Source Code</a></h3>
        <div class="container">
            <div class="row">
            <button onClick={startGame} className="btn btn-info">Start New Game</button>
              <div class="col mt-2">
                <h3>Player 1</h3>
                <h3>Health {playeroneHealth}%</h3>
                <motion.img src="https://i.ibb.co/TtyBddf/image-search-1644237964018.png"
                className='mt-3'/>
                <img className={animation ? "left-bullet-anime bullet" : "bullet"} src="https://i.ibb.co/GFNWYh8/image-search-1644342261293.jpg"/>
                <div><button class="btn btn-info mt-3" onClick={Shooting}>Shoot</button></div>
              </div>
              <div class="col right mt-2">
                <h3>Player 2</h3>
                <h3 id="myval">Health {playertwoHealth}%</h3>
                <img className={animationright ? "right-bullet-anime right-bullet bullet" : "right-bullet bullet"} src="https://i.ibb.co/GFNWYh8/image-search-1644342261293.jpg"/>
                <img src="https://i.ibb.co/yBZnVm0/image-search-1644341614092.jpg" className='mt-3'/>
                <div><button class="btn btn-info mt-3" onClick={ShootingTwo}>Shoot</button></div>
              </div>
            </div>
          </div> 
          <div className='scorecard'>
            <h2 className='text-center'>ScoreCard</h2>
            <h3 className='text-center'>Player1 - won : {scoreOne}</h3>
            <h3 className='text-center'>Player2 - won : {scoreTwo}</h3>
          </div>
            <motion.h1 className='text-center'
            style={{color:"orange"}}
            animate={{ y: -250 }}
            transition={{ ease: "easeOut", duration: 2 }}
            >Web Shooter Game</motion.h1>
            <h4 className={winnerText?"round-winner-text":"round-winner-text-display"}>{scoreOne > scoreTwo ? "Player 1 wins previous Round":"Player 2 wins previous Round"}</h4>
            </>
  );
}

export default App;
