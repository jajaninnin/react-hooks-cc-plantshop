import React, { useState, useEffect } from "react";

function Search({setPlants, initPlants}) {
  const [ searchText, setSearchText ] = useState("");

  useEffect(() => {
    if (searchText === ""){
      setPlants([...initPlants])
    } else {
      const search = initPlants.filter((plant) => {
        if (plant.name.toLowerCase().includes(searchText.toLowerCase())) {
          return true
        } else {
          return false
        }
      })
      setPlants([...search])
    }
  }, [initPlants, searchText, setPlants]);
  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
    </div>
  );
}

export default Search;
