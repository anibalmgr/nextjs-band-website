import React from 'react';
import styles from './layout.module.css';

export default function VideoBK() {

  return (

      <video className={styles.video} autoPlay muted loop>
        <source src={'./videos/videoBK.mp4'} type="video/mp4" />
      </video>

      )
      }
