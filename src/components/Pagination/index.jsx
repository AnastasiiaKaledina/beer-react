import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPageNumber } from '../../redux/slices/filter/filterSlice';


const Pagination = ({ pageNumber }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.wrapper}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setPageNumber(e.selected + 1))} 
      pageRangeDisplayed={1}
      pageCount={41} // сервер не отдает итоговое число страниц или объектов, пришлось посчитать вручную. Соответственно, количество страниц при использовании поиска не сможет измениться.
      forcePage={pageNumber - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
