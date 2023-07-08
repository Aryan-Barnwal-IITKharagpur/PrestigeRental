import "./App.css";
import { useState, useEffect } from "react";
import { Showcard } from "./components/showcard";
import { Filter } from "./components/filter";
import { Navbar } from "./components/navbar";

function App() {
  const [searchDate, setSearchDate] = useState(null);
  const [SearchLocation, setSearchLocation] = useState(null);
  const [SearchType, setSearchType] = useState(null);
  const [SearchPrice, setSearchPrice] = useState([null, null]);
  const [showHome, setShowHome] = useState(true);

  let favorites = null;

  if (localStorage.getItem("fav") === null) {
    favorites = [];
    localStorage.setItem("fav", JSON.stringify(favorites));
  }
  const RemoveFav = (id) => {
    // console.log("Removed", id);
    setfav(
      fav.filter((e) => {
        return e !== id;
      })
    );
    localStorage.setItem("fav", JSON.stringify(fav));
  };
  const addFav = (id) => {
    if (fav === null) setfav([]);
    setfav([...fav, id]);
  };

  const [fav, setfav] = useState(JSON.parse(localStorage.getItem("fav")));

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
    // console.log(fav);
  }, [fav]);

  return (
    <div className="App" style={{ position: "relative" }}>
      <Navbar showHome={showHome} setShowHome={setShowHome} />
      {showHome && (
        <div>
          <Filter
            setSearchDate={setSearchDate}
            setSearchLocation={setSearchLocation}
            setSearchType={setSearchType}
            setSearchPrice={setSearchPrice}
          />
        </div>
      )}
      <Showcard
        searchDate={searchDate}
        SearchLocation={SearchLocation}
        SearchType={SearchType}
        SearchPrice={SearchPrice}
        addFav={addFav}
        RemoveFav={RemoveFav}
        fav={fav}
        findfav={!showHome}
      />
    </div>
  );
}

export default App;
