import React, { useEffect, useState, SetStateAction, Dispatch } from 'react';
import './App.css';
import { CreateNewGroupInput } from './components/CreateNewGroupInput';
import ItemsInput from './components/ItemsInput';

interface Item {
  title: string;
  text: string;
}

function App() {
  const [items, setItems]: [Item[], Dispatch<SetStateAction<Item[]>>] = useState<Item[]>([]);

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem('items') || '[]') as Item[];
    setItems(existingItems);
  }, []);

  const addItemToLocalStorage = (newItem: Item) => {
    const existingItems: Item[] = JSON.parse(localStorage.getItem('items') || '[]');

    if (newItem.title.trim() !== '' && !existingItems.some((item) => item.title === newItem.title)) {
      const updatedItems: Item[] = [...existingItems, newItem];
      localStorage.setItem('items', JSON.stringify(updatedItems));
      setItems(updatedItems);
    } else {
      console.log('Input is empty or item with the same title already exists');
    }
  };

  const deleteItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <CreateNewGroupInput onAddItem={addItemToLocalStorage} />
      <div className="flex-wrap">
        {items.map((item, index) => (
          <ItemsInput key={index} title={item.title} onDelete={() => deleteItem(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
