import Header from "./components/Header";
import Add from "./components/Add";
import Content from "./components/Content";
import Footer from "./components/Footer";

import { useState } from "react";

function App () {
  const [listItem, setListItem] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = (item) => {
    const id = listItem.length ? listItem[listItem.length - 1].id + 1 : 1;
    const newItem = {id, name : item};
    const newListItem = [...listItem, newItem]
    setListItem(newListItem);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd(newItem)
    setNewItem('');
  }

  return (
    <div className="App">
      <div className="headerContent">
        <Header/>
        <Add
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <Content
          listItem={listItem}
        />
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
