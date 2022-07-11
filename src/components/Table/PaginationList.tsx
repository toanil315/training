import React, { Dispatch, SetStateAction, useMemo } from "react";
import PaginationItem from "./PaginationItem";

interface Props {
  amountOfItems: number;
  pageSize: number;
  paginationPosition?: string;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
}

export default function PaginationList({
  amountOfItems,
  pageSize,
  paginationPosition,
  activePage,
  setActivePage,
}: Props) {
  const amountPage = useMemo(() => {
    return Math.floor(amountOfItems / pageSize) + 1;
  }, []);

  return (
    <div
      className="pagination-list"
      style={{
        justifyContent: paginationPosition,
      }}
    >
      {Array(amountPage)
        .fill(1)
        .map((page, index) => {
          return (
            <PaginationItem
              key={index}
              index={index}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          );
        })}
    </div>
  );
}
