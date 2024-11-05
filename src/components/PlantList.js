import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, setInitPlants}) {
  
  function onDelete(id) {
    const updatedPlants = plants.filter(plant => plant.id !== id)
    setPlants(updatedPlants)
  }

  function onUpdatePrice(id, price) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return {...plant, price}
      } else {
        return plant
      }
    });
    setPlants([...updatedPlants]);
    setInitPlants([...updatedPlants]);
  }

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((resp) => resp.json())
      .then((plants) => {
        setPlants(plants)
        setInitPlants(plants)
      })
    }, [setInitPlants, setPlants])
  return (
    <ul className="cards">{plants.map((plant) => {
      return <PlantCard key={plant.id} plant={plant} onDelete={onDelete} onUpdatePrice={onUpdatePrice}/>
    })}</ul>
  );
}

export default PlantList;
