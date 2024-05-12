import styles from '../components/header.module.css';
// import { useState } from 'react';
import Link from 'next/link';
// import SmoothScrollLink from './SmoothScrollLink'; 

export default function Header() {

    return (



        <header className={styles.header}>
          <nav className={styles.navbar}>
            <Link href="#about" scroll={true} className={styles.navItem}>
                About
            </Link>
            <Link href="#experience" scroll={true} className={styles.navItem}>
                Experience
            </Link>
            <Link href="#projects" scroll={true} className={styles.navItem}>
                Projects
            </Link>
          {/* <SmoothScrollLink href="#about">About</SmoothScrollLink>
          <SmoothScrollLink href="#experience">Experience</SmoothScrollLink>
          <SmoothScrollLink href="#projects">Projects</SmoothScrollLink> */}
          </nav>
        </header>
      );
    }