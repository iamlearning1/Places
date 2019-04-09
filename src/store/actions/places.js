import { SET_PLACES, DELETE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";

export const addPlace = (placeName, image, location) => dispatch => {
  dispatch(uiStartLoading());
  fetch(
    "https://us-central1-awesome-places-1dbec.cloudfunctions.net/storeImage",
    {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    }
  )
    .then(res => res.json())
    .then(res => {
      const placeData = {
        placeName,
        location,
        image: res.imageUrl
      };
      return fetch("https://awesome-places-1dbec.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify(placeData)
      })
        .then(res => res.json())
        .then(res => {
          dispatch(uiStopLoading());
        })
        .catch(err => {
          dispatch(uiStopLoading());
          alert("Something went wrong, Please try again");
        });
    })
    .catch(err => {
      dispatch(uiStopLoading());
      alert("Something went wrong, Please try again");
    });
};

const setPlaces = places => ({
  type: SET_PLACES,
  places
});

export const getPlaces = () => dispatch => {
  fetch("https://awesome-places-1dbec.firebaseio.com/places.json")
    .then(res => res.json())
    .then(res => {
      const places = [];
      for (let key in res) {
        places.push({
          ...res[key],
          image: { uri: res[key].image },
          key
        });
      }
      dispatch(setPlaces(places));
    })
    .catch(err => {
      console.log(err);
    });
};

export const deletePlaces = key => dispatch => {
  dispatch(deletePlace(key));
  fetch(`https://awesome-places-1dbec.firebaseio.com/places/${key}.json`, {
    method: "DELETE"
  })
    .then(res => res.json)
    .then(res => console.log("done"))
    .catch(err => {
      alert("Something Went Wrong, Please Try Again");
    });
};

const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  };
};
