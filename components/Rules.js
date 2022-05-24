import Image from 'next/image';
import styles from '../styles/Rules.module.css';

const Rules = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div className={styles.rules}>
          <div className={styles.header}>
            <h1>Rules</h1>
            <div className={styles.image}>
              <Image
                priority
                height={20}
                width={20}
                src='/images/icon-close.svg'
                onClick={() => setOpen()}
                alt='rock paper scissors rules'
              />
            </div>
          </div>
          <div className={styles.image_rules}>
            <Image
              priority
              height={250}
              width={280}
              src='/images/image-rules.svg'
              alt='rock paper scissors rules'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Rules;
