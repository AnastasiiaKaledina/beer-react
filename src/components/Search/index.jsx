import React from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/img/search.svg';
import close from '../../assets/img/close.svg';
import debounce from 'lodash.debounce';
import { setSearchString } from '../../redux/slices/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../../redux/slices/filter/selectors';

const Search = () => {
  const inputRef = React.useRef(null);
  const [localValue, setLocalValue] = React.useState(''); 
  const { searchString } = useSelector(filterSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLocalValue(searchString);
  }, [searchString]);

  const inputDebounce = React.useCallback(
    debounce((str) => {
      dispatch(setSearchString(str));
    }, 1000),
    [],
  );

  const onClearInput = () => {
    dispatch(setSearchString(''));
    setLocalValue('');
    inputRef.current?.focus();
  };

  const onChangeInput = (e) => {
    setLocalValue(e.target.value);
    inputDebounce(e.target.value);
  };

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} width="20" alt="search" />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пива..."
        onChange={onChangeInput}
        value={localValue}
      />
      {localValue && (
        <img onClick={onClearInput} className={styles.close} width="25" src={close} alt="search" />
      )}
    </div>
  );
};

export default Search;
