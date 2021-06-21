import React from "react";

export function Pagination({ postsInPage, totalPosts, paginate, page }) {
  const pageNumbers = [];
  const amountOfPages = Math.ceil(totalPosts / postsInPage);
  for (let i = 1; i <= amountOfPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        <button
          key="back"
          onClick={() => {
            if (page > 1) {
              paginate(page - 1);
            }
          }}
        >
          back
        </button>
        {pageNumbers.map((e) => {
          return (
            <button
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
          key="next"
          onClick={() => {
            if (page < amountOfPages) {
              paginate(page + 1);
            }
          }}
        >
          next
        </button>{" "}
      </ul>
    </div>
  );
}

export default Pagination;
