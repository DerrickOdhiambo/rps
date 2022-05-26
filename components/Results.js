import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Results.module.css';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Result = ({
  win,
  myChoice,
  setWin,
  computer,
  setScore,
  score,
  resetGame,
}) => {
  const [timer, setTimer] = useState(1);

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
    const countdown =
      timer > 0
        ? setInterval(() => {
            setTimer(timer - 1);
          }, 1000)
        : result();
    return () => clearInterval(countdown);
  }, [computer, timer]);

  return (
    <>
      <motion.div
        animate='visible'
        initial='hidden'
        variants={variants}
        className={styles.results}
      >
        <div className={`${styles.my__pick} `}>
          <h4 className='desktop'>You picked</h4>
          <div
            className={`${styles[myChoice]} ${win === 'win' ? 'winner' : ''}`}
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
        <motion.div
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', delay: 1.5, stiffness: 120 }}
          className='game'
          style={{ textAlign: 'center' }}
        >
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
        </motion.div>
        {timer === 0 ? (
          <div className={`${styles.my__pick} `}>
            <h4 className='desktop'>The House picked</h4>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={variants}
              className={`${styles[computer]} ${
                win === 'lose' ? 'winner' : ''
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
            </motion.div>
            <h4 className='responsive'>The House picked</h4>
          </div>
        ) : (
          <div className={`${styles.my__pick__waiting}`}>
            <h4 className='desktop'>The house picked</h4>
            <motion.div initial='' animate=''></motion.div>
            <h4 className='responsive'>The house picked</h4>
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 1.5, stiffness: 120 }}
        className='game_responsive'
        style={{ textAlign: 'center' }}
      >
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
      </motion.div>
    </>
  );
};

export default Result;
