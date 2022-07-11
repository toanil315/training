export interface Column<T extends {}> {
    title: string;
    key: string;
    width: number;
    sort?: (a: T, b: T) => number;
    render?: (record: T, text: any) => React.ReactNode;
  }
  
export interface TableProps<T extends {}> {
    items: T[];
    columns: Column<T>[];
    pageSize?: number;
    paginationPosition?: "left" | "right" | "center";
}