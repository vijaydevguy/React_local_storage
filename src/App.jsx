import './index.css'
import Content from './Content';
import Footer from './Footer';
import Header from './header';
import { useState } from "react";


function App() {

  const [items, setItems] = useState([
      {
      id: 1,
      checked : false,
      item : "Wake up early morning",
      },
      {
      id: 2,
      checked : false,
      item : "Fresh up daily first",
      },
      {
      id: 3,
      checked : true,
      item : "Do workout",
      },
    ]);
  
    const handleCheck = (id) =>{
      const updatedItems = items.map((item) => {
       return item.id === id ? {...item, checked: !item.checked} : item
      })
     setItems(updatedItems);
     localStorage.setItem("todo_list" , JSON.stringify(updatedItems))
    }
  
    const handleDelete = (id) => {
      const deletedItems = items.filter((item) => item.id !== id);
      setItems(deletedItems);
      localStorage.setItem("todo_list" , JSON.stringify(deletedItems))
    }


  const title = "My todo list"
  return (
    <>
      <div className='App'>
        <Header title = {title}/>
        <Content 
        handleCheck ={handleCheck}
        handleDelete = {handleDelete}
        items = {items}
        />
        <Footer 
        items = {items}
        />
      </div>
    </>
  )
}

export default App
