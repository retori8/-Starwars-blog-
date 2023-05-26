const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: null,
      planets: null,
	    favorite:[],
      deleteTask: null,
      img_character:["https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536", "https://media.vandalsports.com/master/6-2022/202267175430_1.jpg", "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=169%2C0%2C1071%2C536", "https://www.lacuarta.com/resizer/WC-SnZFg5L2FPR4AuW44PpiqCGY=/1x0:1280x853/1023x682/cloudfront-us-east-1.images.arcpublishing.com/copesa/LS6NAJWL4ZA4PMRN4MTK5YYLBE.jpeg", "https://lafuerzanoticias.files.wordpress.com/2018/07/leia-organa-1-tall.jpg?w=1536&h=768&crop=1", "https://imgix.bustle.com/uploads/image/2022/3/22/9d5d72cc-318b-4f52-851a-f1f3d55c9013-uncle-owen-obi-wan.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg", "https://www.jedinews.com/wp-content/uploads/2022/05/Bonnie-Piesse-Interview-FI.jpg", "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666", "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=352%2C0%2C1170%2C878", "https://ca-times.brightspotcdn.com/dims4/default/6f9d8d9/2147483647/strip/true/crop/1263x720+0+0/resize/1200x684!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F57%2F32%2F9f488c2d4bc288bcfce63e749811%2Fobi-wan.JPG"],
      img_planet:["https://media.cnn.com/api/v1/images/stellar/prod/131017153302-star-wars-sahara-3.jpg?q=w_1691,h_944,x_0,y_0,c_fill/w_1280", "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C40%2C1280%2C640", "https://upload.wikimedia.org/wikipedia/commons/7/72/Tikal_temples_1_2_3_5_2009.JPG", "https://i.pinimg.com/originals/ee/23/40/ee2340f6ecde9b270f5bd182f3c52b28.jpg", "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630", "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Bespin-Feature-Image-1.jpg","https://s.hdnux.com/photos/01/25/45/15/22434659/4/rawImage.jpg", "https://sm.ign.com/t/ign_latam/screenshot/default/nabo_ya2r.1280.jpg", "https://www.endorexpress.net/wp-content/uploads/startours-coruscant.jpg", "https://preview.redd.it/snfw92qa8sd61.png?width=640&crop=smart&auto=webp&s=f4fc4fd58fdc2ec882275ef9886bcda4a44d3434"]
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
