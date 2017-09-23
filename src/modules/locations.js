import {
  saveNewLocation,
  getLocationsData,
  editExistLocation,
  removeLocation
} from "../data/locations";

export const ADD_LOCATION = "locations/ADD_LOCATION";
export const GET_LOCATIONS = "locations/GET_LOCATIONS";
export const SELECT_LOCATION = "locations/SELECT_LOCATION";
export const EDIT_LOCATION = "locations/EDIT_LOCATION";
export const DELETE_LOCATION = "locations/DELETE_LOCATION";

const initialState = {
  locationsList: getLocationsData() || [],
  selectedLocationId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        locationsList: action.data
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locationsList: action.data
      };
    case SELECT_LOCATION:
      return {
        ...state,
        selectedLocationId: action.data
      };
    case EDIT_LOCATION:
      return {
        ...state,
        locationsList: action.data
      };
    case DELETE_LOCATION:
      return {
        ...state,
        locationsList: action.data
      };

    default:
      return state;
  }
};

export const addLocation = data => {
  const locations = saveNewLocation(data);
  return dispatch => {
    dispatch({
      type: ADD_LOCATION,
      data: locations
    });
  };
};

export const getLocations = () => {
  const locations = getLocationsData();
  return dispatch => {
    dispatch({
      type: ADD_LOCATION,
      data: locations
    });
  };
};

export const selectLocation = id => {
  return dispatch => {
    dispatch({
      type: SELECT_LOCATION,
      data: id
    });
  };
};

export const editLocation = (id, data) => {
  const locations = editExistLocation(id, data);
  return dispatch => {
    dispatch({
      type: EDIT_LOCATION,
      data: locations
    });
  };
};

export const deleteLocation = id => {
  const locations = removeLocation(id);
  return dispatch => {
    dispatch({
      type: DELETE_LOCATION,
      data: locations
    });
  };
};
