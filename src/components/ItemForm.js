import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(e) {
    console.log("....", e.target.value);
    setInputText(e.target.value);
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => handleInputChange(e)} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
