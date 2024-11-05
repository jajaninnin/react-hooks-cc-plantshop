import React, { useState } from "react";

function NewPlantForm({plants, setPlants, setInitPlants}) {
  const initalData = {
    name: "",
    image: "",
    price: 1,
  }
  const [ formData, setFormData ] = useState(initalData)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    const formD = formData
    fetch(`http://localhost:6001/plants/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": formD.name,
        "image": formD.image,
        "price": formD.price,
      })
    })
      .then((resp) => resp.json())
      .then((plant) => {
        setInitPlants([...plants, plant]) //updte the ALL the full list of plant to inclue new plant
        setPlants([...plants, plant]) //made a new array(the filtered plants) plus the new plant 
        setFormData({...initalData})  //resest the form and makes a new obj
      })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"
        value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL"
        value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price"
        value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
