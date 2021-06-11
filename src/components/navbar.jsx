import React, { memo } from 'react';
import styles from '../css_module/navbar.module.css';

const Navbar = memo((props) => {
        

        return (
            <nav className={styles.navbar}>
                <i className={`${styles.logo} ${'fab fa-battle-net'}`}></i>
                <span className={styles.title}>Habit-Tracker</span>
                <span className={styles.count}>{props.totalcount}</span>

            </nav>
        );
    });

export default Navbar;