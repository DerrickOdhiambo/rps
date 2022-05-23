import Image from 'next/image';
import styles from '../styles/Game.module.css';

const Game = () => {
  return (
    <div className={styles.main__body}>
      <div className={styles.paper}>
        <Image
          priority
          src='/images/icon-paper.svg'
          className=''
          height={50}
          width={50}
          alt='Rock Paper Scissors'
        />
      </div>
      <div className={styles.scissors}>
        <Image
          priority
          src='/images/icon-scissors.svg'
          className=''
          height={50}
          width={50}
          alt='Rock Paper Scissors'
        />
      </div>
      <div className={styles.rock}>
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
