import React, { Dispatch, SetStateAction } from "react";

interface Props {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  index: number;
}

export default function PaginationItem({
  activePage,
  setActivePage,
  index,
}: Props) {
  return (
    <div
      onClick={() => {
        setActivePage(index + 1);
      }}
      className={`pagination-item ${activePage === index + 1 ? "active" : ""}`}
    >
      {index + 1}
    </div>
  );
}
