import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [initPlants, setInitPlants ] = useState([])
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} setInitPlants={setInitPlants}/>
      <Search setPlants={setPlants} initPlants={initPlants} />
      <PlantList plants={plants} setPlants={setPlants} setInitPlants={setInitPlants}/>
    </main>
  );
}

export default PlantPage;
