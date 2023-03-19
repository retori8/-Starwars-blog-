import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/card";
import CardTextCharacters from "../component/cardtextcharacters";
import CardTextPlanets from "../component/cardtextplanets";
import CardTextVehicles from "../component/cardtextvehicles";
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
                <Card title={character?.name} key={character?.uid}>
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
          {!!store.planets &&
            store.planets?.results?.length > 0 &&
            store.planets?.results?.map((planet, i) => {
              return (
                <Card title={planet?.name} key={planet?.uid}>
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
          {!!store.vehicles &&
            store.vehicles?.results?.length > 0 &&
            store.vehicles?.results?.map((vehicle, i) => {
              return (
                <Card title={vehicle?.name} key={vehicle?.uid}>
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
