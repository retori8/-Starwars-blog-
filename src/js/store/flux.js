const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planets: null,
      vehicles: null,
	  favorite: [],
    },
    actions: {
      getCharacters: async () => {
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
          setStore({
            characters: characters_info,
          });
          console.log(characters);
          //   setCharacters(characters_info);
        } catch (error) {
          console.log(error.message);
        }
      },
	  getPlanets: async () => {
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
		  setStore({
            planets: planets_info,
          });
		} catch (error) {
		  console.log(error.message);
		}
	},
	getVehicles: async () => {
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
		  setStore({
            vehicles: vehicles_info,
          });
		} catch (error) {
		  console.log(error.message);
		}
	  },

      addFavorite(fav) {
        console.log(fav);
        const { favorite } = getStore();
        let listafav = [...favorite, fav];
        setStore({ favorite: listafav });
      }
    },
  };
};

export default getState;
