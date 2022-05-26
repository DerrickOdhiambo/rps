import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Results.module.css';

const Result = ({
  win,
  myChoice,
  setWin,
  computer,
  setScore,
  score,
  resetGame,
}) => {
  const result = () => {
    if (myChoice === 'rock' && computer === 'scissors') {
      setWin('win');
      setScore(score + 1);
    } else if (myChoice === 'rock' && computer === 'paper') {
      setWin('lose');
      setScore(score - 1);
    } else if (myChoice === 'scissors' && computer === 'rock') {
      setWin('lose');
      setScore(score - 1);
    } else if (myChoice === 'scissors' && computer === 'paper') {
      setWin('win');
      setScore(score + 1);
    } else if (myChoice === 'paper' && computer === 'rock') {
      setWin('win');
      setScore(score + 1);
    } else if (myChoice === 'paper' && computer === 'scissors') {
      setWin('lose');
      setScore(score - 1);
    } else {
      setWin('draw');
    }
  };

  useEffect(() => {
    result();
  }, [computer]);

  return (
    <>
      <div className={styles.results}>
        <div className={`${styles.my__pick} `}>
          <h4 className='desktop'>You picked</h4>
          <div
            className={`${styles[myChoice]} ${win === 'win' ? styles.win : ''}`}
          >
            <Image
              priority
              src={`/images/icon-${myChoice}.svg`}
              className=''
              height={50}
              width={50}
              alt='Rock Paper Scissors'
            />
          </div>
          <h4 className='responsive'>You picked</h4>
        </div>
        <div className='game' style={{ textAlign: 'center' }}>
          {win === 'win' && (
            <div className={styles.show__results}>
              <h1>You Win</h1>
            </div>
          )}
          {win === 'lose' && (
            <div className={styles.show__results}>
              <h1>You Lose</h1>
            </div>
          )}
          {win === 'draw' && (
            <div className={styles.show__results}>
              <h1>Draw</h1>
            </div>
          )}
          <button className={styles.btn} onClick={resetGame}>
            Play Again
          </button>
        </div>
        <div className={`${styles.my__pick} `}>
          <h4 className='desktop'>The House picked</h4>
          <div
            className={`${styles[computer]} ${
              win === 'lose' ? styles.win : ''
            }`}
          >
            <Image
              priority
              src={`/images/icon-${computer}.svg`}
              className=''
              height={50}
              width={50}
              alt='Rock Paper Scissors'
            />
          </div>
          <h4 className='responsive'>The House picked</h4>
        </div>
      </div>
      <div className='game_responsive' style={{ textAlign: 'center' }}>
        {win === 'win' && (
          <div className={styles.show__results}>
            <h1>You Win</h1>
          </div>
        )}
        {win === 'lose' && (
          <div className={styles.show__results}>
            <h1>You Lose</h1>
          </div>
        )}
        {win === 'draw' && (
          <div className={styles.show__results}>
            <h1>Draw</h1>
          </div>
        )}
        <button className={styles.btn} onClick={resetGame}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default Result;
