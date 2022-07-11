import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';
import Table from './components/Table/Table';

interface Image {
  url: string;
  width: number;
  height: number;
}

interface StockItem {
  id: number;
  name: string;
  count: number;
  image: Image
}

const stockItems: StockItem[] = [
  {
    id: 1,
    name: "Pencil",
    count: 3,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538058-52edaa00-397b-11eb-8107-ea606bf90929.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 2,
    name: "Paper",
    count: 5,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538104-61d45c80-397b-11eb-8c56-b2de523b9aa3.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 3,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 4,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 5,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 6,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 7,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 8,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 9,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 10,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 11,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 12,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 13,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 14,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 15,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 16,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 17,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 18,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 19,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 20,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 21,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 22,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
  {
    id: 23,
    name: "Scissors",
    count: 2,
    image: {
      url:
        "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
      width: 100,
      height: 50
    }
  },
];

function App() {
  const columns = [
    {
      title: 'ID',
      key: 'id',
      width: 20,
      sort: (a: StockItem, b: StockItem) => {
        return a.id - b.id
      }
    },
    {
      title: 'Name',
      key: 'name',
      width: 30
    },
    {
      title: 'Count',
      key: 'count',
      width: 20,
      sort: (a: StockItem, b: StockItem) => {
        return a.count - b.count
      },
      render: (record: StockItem, text: any) => {
        return <p style={{color: 'blue'}}>{text}</p>
      }
    },
    {
      title: 'Image',
      key: 'image',
      width: 30,
      render: (record: StockItem, text: any) => {
        return <img style={{width: text.width, height: text.height}} src={text.url} alt={record.name} />
      }
    },
  ]


  return (
    <div className="App">
      <Table
        columns={columns}
        items={stockItems}
        pageSize={10}
      />
    </div>
  );
}

export default App;
