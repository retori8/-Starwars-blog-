const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
	//   characterDetail: null,
      planets: null,
	    favorite:[],
      deleteTask: null
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
          if (response.status === 404) throw Error("Page not found");
          const characters_info = await response.json();
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
	//   getCharacterdetail: async () => {
    //     try {
    //       const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
    //         metod: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       const characters_detail = await response.json();
    //       setStore({
    //         characterDetail: characters_detail,
    //       });
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   },
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

    addFavorite(fav) {
        const { favorite } = getStore();
        let listafav = [...favorite, fav];
        setStore({ favorite: listafav });
    },
    handleDelete(i) {
      const {favorite} = getStore()
      favorite.splice(i, 1);
      setStore({ favorite: favorite });
    }
    },
  };
};

export default getState;
