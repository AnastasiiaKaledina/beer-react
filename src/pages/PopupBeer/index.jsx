import axios from 'axios';
import styles from './PopupBeer.module.scss';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PopupBeer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [beerInfo, setBeerInfo] = React.useState();

  React.useEffect(() => {
    async function getBeerInfo() {
      try {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${params.id}`);
        setBeerInfo(...data);
      } catch (error) {
        alert('Error when getting beer');
        navigate('/');
      }
    }

    getBeerInfo();
  }, []);

  if (!beerInfo) return <>Loading...</>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={beerInfo.image_url} alt={beerInfo.name} height="700px" />
      </div>

      <div className={styles.infoWrapper}>
        <h1 className={styles.name}>{beerInfo.name}</h1>
        <p className={styles.tagline}>{beerInfo.tagline}</p>
        <p className={styles.description}>{beerInfo.description}</p>
        <p className={styles.abv}>Alcohol strength: {beerInfo.abv}%</p>
        <p className={styles.food_pairing}>Food pairing:</p>
        <ul>
          {beerInfo.food_pairing.map((item) => (
            <li key={Math.random()}>{item}</li>
          ))}
        </ul>
        <Link to="/">
          <button className="button button--outline">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default PopupBeer;
