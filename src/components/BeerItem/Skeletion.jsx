import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './BeerItem.module.scss';

const MyLoader = () => (
  <ContentLoader
    className={styles.beerBlock}
    speed={2}
    width={260}
    height={600}
    viewBox="0 0 260 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="10" rx="0" ry="0" width="260" height="300" />
    <rect x="0" y="359" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="404" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="508" rx="20" ry="30" width="151" height="45" />
  </ContentLoader>
);

export default MyLoader;
