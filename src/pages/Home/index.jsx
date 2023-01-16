import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../../redux/slices/beer/beerSlice';
import styles from './Home.module.scss';
import { Search, Pagination, CardBeer, MyLoader } from '../../components';
import { beerSelector } from '../../redux/slices/beer/selectors';
import { filterSelector } from '../../redux/slices/filter/selectors';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setFilter } from '../../redux/slices/filter/filterSlice';

const Home = () => {
  const { beersData, status } = useSelector(beerSelector);
  const { pageNumber, searchString } = useSelector(filterSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMounted = React.useRef(false);
  const isParams = React.useRef(false);

  React.useEffect(() => {
    if (window.location.search) {
      dispatch(setFilter(qs.parse(window.location.search.substring(1))));
      isParams.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryObject = {
        pageNumber,
      };
      if (searchString) queryObject.search = searchString;
      const queryString = qs.stringify(queryObject);
      navigate(`?${queryString}`);
    }

    if (!isParams.current) {
      dispatch(fetchBeers({ pageNumber, searchString }));
    }

    isMounted.current = true;
    isParams.current = false;
  }, [searchString, pageNumber]);

  
  return (
    <>
      <Search />
      <h1 className={styles.title}>Пиво</h1>
      {status === 'error' ? (
        <div className={styles.errorInfo}>
          <h3>
            Произошла ошибка<span>😕</span>
          </h3>
          <p>К сожалению, не удалось получить карточки. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className={styles.items}>
          {status === 'loading' ? (
            [...new Array(8)].map((_, index) => <MyLoader key={index} />)
          ) : beersData.length === 0 ? (
            <div>Товаров не найдено</div>
          ) : (
            beersData.map((beer) => <CardBeer {...beer} key={beer.name} />)
          )}
        </div>
      )}
      <Pagination pageNumber={pageNumber} />
    </>
  );
};

export default Home;
