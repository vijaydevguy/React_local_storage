import { useState } from "react";
import { FaBeer } from "react-icons/fa";

const SearchItem = ({ items,setItems }) => {
  const [search, setSearch] = useState("");
  const filteredItems = items.filter((item) =>{
    return item.item.toLowerCase().includes(search.toLowerCase());
  });

    setItems(filteredItems);
    localStorage.setItem("todo_list", JSON.stringify(filteredItems));

  // console.log(filteredItems)

  return (
    <form
      className="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Items"
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
