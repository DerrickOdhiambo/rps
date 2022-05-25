import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Game.module.css';

const Game = ({ setMyChoice }) => {
  const myChoice = (e) => {
    setMyChoice(e.currentTarget.dataset.id);
    console.log(e.currentTarget.dataset.id);
  };
  return (
    <div className={styles.main__body}>
      <div data-id='paper' onClick={myChoice} className={styles.paper}>
        <Image
          priority
          src='/images/icon-paper.svg'
          className=''
          height={50}
          width={50}
          alt='Rock Paper Scissors'
        />
      </div>
      <div data-id='scissors' onClick={myChoice} className={styles.scissors}>
        <Image
          priority
          src='/images/icon-scissors.svg'
          className=''
          height={50}
          width={50}
          alt='Rock Paper Scissors'
        />
      </div>
      <div data-id='rock' onClick={myChoice} className={styles.rock}>
        <Image
          priority
          src='/images/icon-rock.svg'
          className=''
          height={50}
          width={50}
          alt='Rock Paper Scissors'
        />
      </div>
    </div>
  );
};

export default Game;
