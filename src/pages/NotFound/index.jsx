import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>😕</span>
      <br />
      <h2>
        Page not found. Try going to&nbsp;
        <NavLink to="/" className={styles.mainHref}>
          home
        </NavLink>
      </h2>
    </div>
  );
};

export default NotFound;
