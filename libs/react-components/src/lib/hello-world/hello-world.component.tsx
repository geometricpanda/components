import React from 'react';
import styles from './hello-world.module.css';


export const HelloWorld = () => {
  return (
    <p className={styles['hello-world']}>
      Hello World
    </p>
  )
};
