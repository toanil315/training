import React from 'react'
import { Column, MinTableItem } from './type'
import {objectKeys, isPrimitive} from './util'

interface Props<T> {
    item: T;
    columns: Column<T>[]
}

function Row<T extends {}>({item, columns} : Props<T>) {
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
  )
}

export default Row