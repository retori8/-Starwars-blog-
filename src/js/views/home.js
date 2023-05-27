import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import CardCharacters from "../component/cardcharacter";
import CardPlanets from "../component/cardplanet";

import { Context } from "../store/appContext";

export const Home = () => {

  const { store, actions } = useContext(Context);

  return (
    <>
      <p id="titulo" className="fs-1 text-white">
        CHARACTERS
      </p>
      <div className="containet d-flex justify-content-center">
        <div className="row justify-content-center row-col-2 mt-5 g-2">
          {!!store.characters &&
            store.characters?.results?.length > 0 &&
            store.characters?.results?.map((character, i) => {
              return (
                <Card img={store.img_character[character?.uid -1]} >
                  <CardCharacters
                    title={character?.name}
                    gender={character?.properties?.gender}
                    hair_color={character?.properties?.hair_color}
                    eye_color={character?.properties?.eye_color}
                    key={character?.uid}
                    uid={`/characters/${character?.uid}`}
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
          {!!store.planets &&
            store.planets?.results?.length > 0 &&
            store.planets?.results?.map((planet, i) => {
              return (
                <Card img={store.img_planet[planet?.uid -1]}>
                  <CardPlanets
                    title={planet?.name}
                    population={planet?.properties?.population}
                    terrain={planet?.properties?.terrain}
                    key={planet?.uid}
                    uid={`/planets/${planet?.uid}`}
                  />
                </Card>
              );
            })}
        </div>
      </div>
      <br/>
      <br/>
    </>
  );
};
