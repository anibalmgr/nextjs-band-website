import React from 'react';
import styles from './video.module.css';

import { useMediaQuery } from 'react-responsive';

export default function VideoBK() {

  const isTablet = useMediaQuery({ query: '(min-Width: 600px)'});

  return (
      isTablet ? <video className={styles.video} autoPlay muted loop>
        <source src={"./videos/videoBK-small.mp4"} type="video/mp4" />
      </video> : <img className={styles.video} src="./images/background.jpg" alt="background" />

      )
      }
