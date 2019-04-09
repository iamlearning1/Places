import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";
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

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  };
};
