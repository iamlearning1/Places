import { SET_PLACES, DELETE_PLACE } from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken } from "./index";

export const addPlace = (placeName, image, location) => dispatch => {
  let authToken;
  dispatch(uiStartLoading());
  dispatch(authGetToken())
    .catch(() => {
      alert("No valid token found");
    })
    .then(token => {
      authToken = token;
      return fetch(
        "https://us-central1-awesome-places-1dbec.cloudfunctions.net/storeImage",
        {
          method: "POST",
          body: JSON.stringify({
            image: image.base64
          }),
          headers: {
            Authorization: "Bearer" + authToken
          }
        }
      )
        .then(res => res.json())
        .then(res => {
          const placeData = {
            placeName,
            location,
            image: res.imageUrl
          };
          return fetch(
            "https://awesome-places-1dbec.firebaseio.com/places.json?auth=" +
              authToken,
            {
              method: "POST",
              body: JSON.stringify(placeData)
            }
          )
            .then(res => res.json())
            .then(res => {
              console.log(res);
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
    });
};

const setPlaces = places => ({
  type: SET_PLACES,
  places
});

export const getPlaces = () => dispatch => {
  dispatch(authGetToken())
    .then(token => {
      return fetch(
        "https://awesome-places-1dbec.firebaseio.com/places.json?auth=" + token
      );
    })
    .catch(err => {
      alert("You need to Login");
    })
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
      alert("Something went wrong");
    });
};

export const deletePlaces = key => dispatch => {
  dispatch(authGetToken())
    .then(token => {
      dispatch(deletePlace(key));
      return fetch(
        `https://awesome-places-1dbec.firebaseio.com/places/${key}.json?auth=${token}`,
        {
          method: "DELETE"
        }
      );
    })
    .catch(err => {
      alert("You need to login");
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
