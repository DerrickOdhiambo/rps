import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import Rules from './Rules';

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.footer}>
        <span onClick={() => setOpen(!open)}>Rules</span>
      </div>
      <Rules
        open={open}
        setOpen={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      />
    </>
  );
};

export default Footer;
