import React, { useState } from "react";

function PlantCard({plant, onDelete, onUpdatePrice}) {
  const [ inStock, setInStock ] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [newPrice, setNewPrice] = useState(0.00);
  
  function handleClickStock () {
    setInStock((inStock) => !inStock)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDelete(plant.id)) 
  }

  function handleEdit(event) {
    if (event.target.innerText === "Submit") {
      submitEdit();
    }
    setIsEdit(!isEdit);
  }

  function handlePriceChange(event) {
    setNewPrice(event.target.value);
  }

  function submitEdit () {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "price": newPrice})
    })
    .then((resp) => resp.json())
    .then((plant) => onUpdatePrice(plant.id, plant.price)) 
  }
  

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      { isEdit ? (
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPrice}
        onChange={handlePriceChange}/>
      ) : (
        <p>Price: {plant.price}</p>
      )}
      <button onClick={handleClickStock} className={inStock ? "primary" : ""}>
      {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleEdit}>{isEdit ? 'Submit' : 'Edit Price'}</button>
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
