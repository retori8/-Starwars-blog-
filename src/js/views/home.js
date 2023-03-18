import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import CardTextCharacters from "../component/cardtextcharacters";
import CardTextPlanets from "../component/cardtextplanets";
import CardTextVehicles from "../component/cardtextvehicles";

export const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [planets, setPlanets] =useState(null)
  const [vehicles, setVehicles] =useState(null)

  useEffect(() => {
    getCharacters();
    getPlanets()
    getVehicles()
  }, []);

  const getCharacters = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people/", {
        metod: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log("response", response);
      if (response.status === 404) throw Error("Page not found");
      const characters_info = await response.json();
      /* characters_info.results.forEach(async ({ url }, i) => {
        try {
          const resp = await fetch(url);
          const data = await resp.json();
          
          characters_info.results[i].properties = data?.result?.properties;
        
        } catch (error) {
          console.log(error.message);
        }
      }); */
      for (let i = 0; i < characters_info.results.length; i++) {
        const resp = await fetch(characters_info.results[i].url);
        const data = await resp.json();

        characters_info.results[i].properties = data?.result?.properties;
      }
      setCharacters(characters_info);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets/", {
        metod: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 404) throw Error("Page not found");
      const planets_info = await response.json();
      for (let i = 0; i < planets_info.results.length; i++) {
        const resp = await fetch(planets_info.results[i].url);
        const data = await resp.json();

        planets_info.results[i].properties = data?.result?.properties;
      }
      setPlanets(planets_info);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles/", {
        metod: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 404) throw Error("Page not found");
      const vehicles_info = await response.json();
      for (let i = 0; i < vehicles_info.results.length; i++) {
        const resp = await fetch(vehicles_info.results[i].url);
        const data = await resp.json();

        vehicles_info.results[i].properties = data?.result?.properties;
      }
      setVehicles(vehicles_info);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <p id="titulo" className="fs-1 text-white">
        CHARACTERS
      </p>
      <div className="containet d-flex justify-content-center">
        <div className="row justify-content-center row-col-2 mt-5 g-2">
          {!!characters &&
            characters?.results?.length > 0 &&
            characters?.results?.map((character, i) => {
              console.log(character.properties);
              return (
                <Card>
                  <CardTextCharacters
                    title={character?.name}
                    gender={character?.properties?.gender}
                    hair_color={character?.properties?.hair_color}
                    eye_color={character?.properties?.eye_color}
                    key={character?.uid}
                  />
                </Card>
              );
            })}
        </div>
      </div>
      <p id="titulo" className="fs-1 text-white">
        PLANETS
      </p>
      <div className="containet d-flex justify-content-center">
        <div className="row justify-content-center row-col-2 mt-5 g-2">
          {!!planets &&
            planets?.results?.length > 0 &&
            planets?.results?.map((planet, i) => {
              return (
                <Card>
                  <CardTextPlanets
                    title={planet?.name}
                    population={planet?.properties?.population}
                    terrain={planet?.properties?.terrain}
                    key={planet?.uid}
                  />
                </Card>
              );
            })}
        </div>
      </div>
      <p id="titulo" className="fs-1 text-white">
        VEHICLES
      </p>
      <div className="containet d-flex justify-content-center">
        <div className="row justify-content-center row-col-2 mt-5 g-2">
          {!!vehicles &&
            vehicles?.results?.length > 0 &&
            vehicles?.results?.map((vehicle, i) => {
              return (
                <Card>
                  <CardTextVehicles
                    title={vehicle?.name}
                    manufacturer={vehicle?.properties?.manufacturer}
                    model={vehicle?.properties?.model}
                    passengers={vehicle?.properties?.passengers}
                    key={vehicle?.uid}
                  />
                </Card>
              );
            })}
        </div>
      </div>
      
    </>
  );
};
