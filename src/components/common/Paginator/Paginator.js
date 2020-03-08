import React from "react";
import s from "./paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div className={s.paginate}>
    {pages.map(p => {
      return <span
        className={currentPage === p &&
        s.selectedPage || s.selectPage}
        onClick={() => {
          onPageChanged(p)

        }}>{p}</span>
    })}
  </div>
};

export default Paginator;