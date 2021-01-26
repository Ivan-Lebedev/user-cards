import React from "react"
import styles from "./Pagination.module.scss"
import ReactPaginate from "react-paginate"

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize) || 1
  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={currentPage}
      onPageChange={onPageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      previousLabel="<<"
      nextLabel=">>"
      breakLabel="..."
      breakClassName={styles.item}
      breakLinkClassName={styles.link}
      containerClassName={styles.container}
      activeClassName={styles.active}
      pageClassName={styles.item}
      pageLinkClassName={styles.link}
      previousClassName={styles.item}
      previousLinkClassName={styles.item}
      nextClassName={styles.item}
      nextLinkClassName={styles.item}
    />
  )
}

export default Pagination
