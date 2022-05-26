import { useState, useEffect } from 'react';
import Result from './Results';

const Choice = ({ score, setScore, myChoice, setMyChoice }) => {
  const [computer, setComputer] = useState('');
  const [win, setWin] = useState('');

  const compPick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    compPick();
  }, []);

  const resetGame = () => {
    setMyChoice('');
  };

  return (
    <div className='choice'>
      <Result
        myChoice={myChoice}
        win={win}
        setWin={setWin}
        computer={computer}
        setScore={setScore}
        score={score}
        resetGame={resetGame}
      />
    </div>
  );
};

export default Choice;
