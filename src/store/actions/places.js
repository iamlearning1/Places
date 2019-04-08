import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, image) => {
  return {
    type: ADD_PLACE,
    payload: {
      placeName,
      image
    }
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    key
  };
};
