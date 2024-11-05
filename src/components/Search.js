import React from "react";

function Search({plants, setPlants, initPlants}) {
  //const [ isSearch, setSearch ] = useState("")

  function handleSearch(event) {
    if (event.target.value === ""){
      setPlants([...initPlants])
    } else {
      const search = initPlants.filter((plant) => {
        if (plant.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          return true
        } else {
          return false
        }
      })
      setPlants([...search])
    }
    
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
