import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log("hi");
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")
      return item.name.toUpperCase().includes(searchValue.toUpperCase());
    return (
      item.category === selectedCategory &&
      item.name.toUpperCase().includes(searchValue.toUpperCase())
    );
  });

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
