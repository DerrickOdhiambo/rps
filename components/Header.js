import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = ({ score }) => {
  return (
    <>
      <div className={styles.header}>
        <div className='image'>
          <Image
            priority
            src='/images/logo.svg'
            className=''
            height={100}
            width={144}
            alt='Rock Paper Scissors'
          />
        </div>
        <div className={styles.score}>
          <h4>score</h4>
          <span>{score}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
