import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import PaginationList from "./PaginationList";
import Row from "./Row";
import "./Table.css";
import { TableProps, Column, MinTableItem } from "./type";

export default function Table<T extends {}>(props: TableProps<T>) {
  const [itemList, setItemList] = useState<T[]>(props.items);
  const [sortInfo, setsortInfo] = useState<{
    sortKey: string;
    orderSort: number;
  }>({
    sortKey: "",
    orderSort: 0, // 0: list origin, 1: ascending, 2: descending
  });
  const originListRef = useRef<T[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [itemsListDisplay, setItemsListDisplay] = useState<T[]>([]);

  useEffect(() => {
    originListRef.current = JSON.parse(JSON.stringify(props.items));
  }, []);

  useEffect(() => {
    const pageSize = props.pageSize ? props.pageSize : 20;
    setItemsListDisplay(
      itemList.slice((activePage - 1) * pageSize, activePage * pageSize)
    );
  }, [itemList, activePage]);

  const sortList = (sortKey: string, sortFn: (a: T, b: T) => number) => {
    if (sortKey === sortInfo.sortKey) {
      // If thead's sortKey === sortInfo.sortKey => continue next step
      switch (sortInfo.orderSort) {
        case 0: {
          setItemList([...itemList.sort(sortFn)]);
          setsortInfo({ ...sortInfo, orderSort: 1 });
          break;
        }
        case 1: {
          setItemList([...itemList.reverse()]);
          setsortInfo({ ...sortInfo, orderSort: 2 });
          break;
        }
        default: {
          setItemList([...originListRef.current]);
          setsortInfo({ ...sortInfo, orderSort: 0 });
          break;
        }
      }
    } else {
      // => new sortKey and back to start
      setItemList([...itemList.sort(sortFn)]);
      setsortInfo({ sortKey, orderSort: 1 });
    }
  };

  function renderHeaders(columns: Column<T>[]): React.ReactNode {
    return columns.map((column, index) => {
      return (
        <Header
          key={index}
          column={column}
          sortList={sortList}
          sortInfo={sortInfo}
        />
      );
    });
  }

  return (
    <>
      <table border={0}>
        <thead>
          <tr>
            {renderHeaders(props.columns)}
          </tr>
        </thead>
        <tbody>
          {itemsListDisplay.map((item: T) => {
            return <Row item={item} columns={props.columns} />;
          })}
        </tbody>
      </table>
      <PaginationList
        amountOfItems={itemList.length}
        pageSize={props.pageSize ? props.pageSize : 20}
        paginationPosition={
          props.paginationPosition ? props.paginationPosition : "right"
        }
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </>
  );
}
