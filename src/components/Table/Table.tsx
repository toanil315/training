import React, { ReactNode, useEffect, useRef, useState } from "react";
import "./Table.css";

function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

function isPrimitive(value: any): boolean {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
}

interface Column<T extends {}> {
  title: string;
  key: string;
  width: number;
  sort?: (a: T, b: T) => number;
  render?: (record: T, text: any) => React.ReactNode;
}

interface TableProps<T extends {}> {
  items: T[];
  columns: Column<T>[];
  pageSize?: number;
  paginationPosition?: 'left' | 'right' | 'center'
}

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
  const positionRef  = useRef({
    left: 'start',
    right: 'end',
    center: 'center'
  })
  const [activePage, setActivePage] = useState<number>(1)
  const [itemsListDisplay, setItemsListDisplay] = useState<T[]>([])
  

  useEffect(() => {
    originListRef.current = JSON.parse(JSON.stringify(props.items));
  }, []);

  useEffect(() => {
    const pageSize = props.pageSize ? props.pageSize : 20
    setItemsListDisplay(itemList.slice((activePage  - 1) * pageSize, activePage * pageSize))
  }, [itemList, activePage])

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

  console.log(itemList)

  function renderRow(item: T, columns: Column<T>[]): ReactNode {
    return (
      <tr>
        {objectKeys(item).map((itemProperty) => {
          //Find column which has key match with itemProperty
          const columnItem = columns.find(
            (column) => column.key === itemProperty
          );

          if (columnItem?.render) {
            return <td>{columnItem.render(item, item[itemProperty])}</td>;
          }

          return (
            <td>
              {
                (isPrimitive(item[itemProperty])
                  ? item[itemProperty]
                  : "") as React.ReactNode
              }
            </td>
          );
        })}
      </tr>
    );
  }

  function renderHeader(columns: Column<T>[]): React.ReactNode {
    return columns.map((column, index) => {
      return (
        <th
          onClick={() => {
            if (!!column.sort) sortList(column.key ,column.sort);
          }}
          style={{ width: `${column.width}%` }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: !!column.sort ? "pointer" : "default",
            }}
          >
            {column.title}
            {!!column.sort && (
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 50,
                  marginLeft: 5,
                }}
              >
                <i
                  style={{
                    height: 10,
                    color: sortInfo.orderSort === 2 && sortInfo.sortKey === column.key ? "#2d2ddc" : "#bbb9b9",
                  }}
                  className="fa-solid fa-caret-up"
                ></i>
                <i
                  style={{
                    height: 10,
                    color: sortInfo.orderSort === 1 && sortInfo.sortKey === column.key ? "#2d2ddc" : "#bbb9b9",
                  }}
                  className="fa-solid fa-caret-down"
                ></i>
              </span>
            )}
          </div>
        </th>
      );
    });
  }

  function renderPagination(amountOfItems: number, pageSize: number, paginationPosition?: string) : React.ReactNode {
    const amountPage = Math.floor(amountOfItems / pageSize) + 1

    return <div style={{width: '100%' ,marginLeft: -10, marginTop: 10, display: 'flex', justifyContent: paginationPosition ? paginationPosition : 'right', marginBottom: 20}}>
      {
        Array(amountPage).fill(1).map((page, index) => {
          return <div onClick={() => {setActivePage(index + 1)}} className={`pagination-item ${activePage === index + 1 ? 'active' : ''}`}>{index + 1}</div>
        })
      }
    </div>
  }

  return (
    <>
      <table border={0}>
        <thead>{renderHeader(props.columns)}</thead>
        <tbody>
          {itemsListDisplay.map((item: T) => {
            return renderRow(item, props.columns);
          })}
        </tbody>
      </table>
      {renderPagination(itemList.length, props.pageSize ? props.pageSize : 20, props.paginationPosition)}
    </>
  );
}
