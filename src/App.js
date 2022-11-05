import { useState } from "react";
import Header from "./components/Header";
import Add from "./components/Add";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App () {
  const [listItem, setListItem] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;
    const newItem = {checked: false, id, name : item};
    const newListItem = [...listItem, newItem];
    setListItem(newListItem);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newItem);
    setNewItem('');
  }
  const handleCheck = (id) => {
    const newListItem = listItem.map(item => item.id === id ? {...item, checked: !item.checked} : item);
    setListItem(newListItem);
  }
  const handleDelete = (id) => {
    const newListItem = listItem.filter(item => item.id !== id);
    setListItem(newListItem);
  }

  return (
    <div className="App">
      <div className="headerContent">
        <Header/>
        <Add
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Content
          listItem={listItem}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
