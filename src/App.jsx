import "./index.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./header";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
  //   [
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "Wake up early morning",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Fresh up daily first",
  //   },
  //   {
  //     id: 3,
  //     checked: true,
  //     item: "Do workout",
  //   },
  // ]

  JSON.parse(localStorage.getItem('todo_list')) || []
);
// console.log(localStorage.getItem('todo_list'))

  const handleCheck = (id) => {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    const deletedItems = items.filter((item) => item.id !== id);
    setItems(deletedItems);
    localStorage.setItem("todo_list", JSON.stringify(deletedItems));
  };


  const [newItem,setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!newItem){
      alert('Please enter a value');
      return;
    }

    const updatedItems = [...items, { id: items.length + 1, checked: false, item: newItem }];
    setItems(updatedItems);
    localStorage.setItem('todo_list', JSON.stringify(updatedItems));
    setNewItem('');
  }


  const title = "My todo list";
  return (
    <>
      <div className="App">
        <Header title={title} />
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem 
        items={items}
        setItems={setItems}
        />
        <Content
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          items={items}
        />
        <Footer items={items} />
      </div>
    </>
  );
}

export default App;
