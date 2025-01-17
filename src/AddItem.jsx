import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <>
      <form 
      className="addForm"
      onSubmit={handleSubmit}
      >
        <label htmlFor="addItem">add</label>
        <input
          autoFocus
          id="addItem"
          placeholder="Add a new item"
          type="text"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button
        type='submit'
        aria-label='Add item' 
        >
          <FaPlus />
        </button>
      </form>
    </>
  );
};

export default AddItem;
