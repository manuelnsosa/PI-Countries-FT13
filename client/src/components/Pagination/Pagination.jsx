import React from "react";
import { PaginationStyle } from "./Pagination.js";
export function Pagination({ postsInPage, totalPosts, paginate, page }) {
  const pageNumbers = [];
  const amountOfPages = Math.ceil(totalPosts / postsInPage);
  for (let i = 1; i <= amountOfPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationStyle>
      <ul>
        <button
          className="btn"
          key="back"
          onClick={() => {
            if (page > 1) {
              paginate(page - 1);
            }
          }}
        >
          BACK
        </button>
        {pageNumbers.map((e) => {
          return (
            <button
              className="btn"
              id={e}
              key={e}
              onClick={() => {
                paginate(e);
              }}
            >
              {e}
            </button>
          );
        })}
        <button
          className="btn"
          key="next"
          onClick={() => {
            if (page < amountOfPages) {
              paginate(page + 1);
            }
          }}
        >
          NEXT
        </button>{" "}
      </ul>
    </PaginationStyle>
  );
}

export default Pagination;
