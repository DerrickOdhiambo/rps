import Image from 'next/image';
import styles from '../styles/Rules.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Rules = ({ open, setOpen }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            className={styles.rules}
            variants={variants}
            initial='hidden'
            animate='visible'
          >
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
            <div className={styles.image_responsive}>
              <Image
                priority
                height={20}
                width={20}
                src='/images/icon-close.svg'
                onClick={() => setOpen()}
                alt='rock paper scissors rules'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Rules;
