import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BeerItem.module.scss';

const BeerItem = ({ image_url, name, tagline, description, id }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`beers/${id}`}>
        <div className={styles.beerBlock}>
          <img src={image_url} alt={name} height="300px" />
          <p className={styles.title}>{name}</p>
          <p className={styles.tagline}>{tagline}</p>
          <p className={styles.description}>
            {description.length > 140 ? description.slice(0, 141) + '...' : description}
          </p>
        </div>
      </Link>
      <Link to={`beers/${id}`}>
        <button className="button button--outline">Подробнее</button>
      </Link>
    </div>
  );
};

export default BeerItem;
