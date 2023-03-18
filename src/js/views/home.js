import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/card";


export const Home = () => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      const response = await fetch(
        "https://www.swapi.tech/api/people/",
        {
          metod: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      for(let i = 0; i< characters_info.results.length; i++){
       
            const resp = await fetch(characters_info.results[i].url);
            const data = await resp.json();
            
            characters_info.results[i].properties = data?.result?.properties;
          
      }
      setCharacters(characters_info);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <p id="titulo" className="fs-1 text-white">
        CHARACTERS
      </p>
      <hr className="hr" />
      <div className="containet d-flex justify-content-center">
        <div className="row justify-content-center row-col-2 mt-5 g-2">
          {!!characters &&
            characters?.results?.length > 0 &&
            characters?.results?.map((character, i) => {
              console.log(character.properties)
              return (
                <Card
                  title={character?.name}
                  gender={character?.properties?.gender}
                  hair_color={character?.properties?.hair_color}
                  eye_color={character?.properties?.eye_color}
                  key={character?.uid}
                />
                
              );
            })}
        </div>
      </div>
    </>
  );
};
