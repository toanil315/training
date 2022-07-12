import React from "react";
import { Column, MinTableItem } from "./type";

interface Props<T> {
  column: Column<T>;
  sortList: (sortKey: string, sortFn: (a: T, b: T) => number) => void;
  sortInfo: {
    sortKey: string;
    orderSort: number;
  };
}

export default function Header<T extends {}>({
  column,
  sortInfo,
  sortList,
}: Props<T>) {
  return (
    <th
      onClick={() => {
        if (!!column.sort) sortList(column.key, column.sort);
      }}
      style={{ width: `${column.width}%` }}
    >
      <div
        className="header"
        style={{
          cursor: !!column.sort ? "pointer" : "default",
        }}
      >
        {column.title}
        {!!column.sort && (
          <span className="sort-symbols">
            <i
              style={{
                height: 10,
                color:
                  sortInfo.orderSort === 2 && sortInfo.sortKey === column.key
                    ? "#2d2ddc"
                    : "#bbb9b9",
              }}
              className="fa-solid fa-caret-up"
            ></i>
            <i
              style={{
                height: 10,
                color:
                  sortInfo.orderSort === 1 && sortInfo.sortKey === column.key
                    ? "#2d2ddc"
                    : "#bbb9b9",
              }}
              className="fa-solid fa-caret-down"
            ></i>
          </span>
        )}
      </div>
    </th>
  );
}
