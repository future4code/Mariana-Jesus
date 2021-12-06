
import axios from "axios";
import PokeCard from "./components/PokeCard";
import { useState, useEffect } from "react";

function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");
  
   const pegaLista = () => {
 
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    useEffect(() => {
      pegaLista();
    }, [pokeName]);

    const changePokeName = (event) => {
      setPokeName(event.target.value);
    };

    return (
      <div className="App">
        
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
       
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
       
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  };

export default App;
