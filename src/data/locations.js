import { getData, getNewId } from "./dataActions";

const myStorage = window.localStorage;

export function saveNewLocation(data) {
  let locations = getData("locations");
  const id = getNewId(locations);
  locations.push(Object.assign({ id }, data));
  myStorage.setItem("locations", JSON.stringify(locations));
  return locations;
}

export function getLocationsData() {
  return getData("locations");
}

export function editExistLocation(id, data) {
  let locations = getData("locations");
  locations = locations.map(l => {
    if (l.id === +id) {
      return Object.assign({ id: +id }, data);
    } else {
      return l;
    }
  });
  myStorage.setItem("locations", JSON.stringify(locations));
  return locations;
}

export function removeLocation(id) {
  let locations = getData("locations");
  locations = locations.filter(l => {
    return l.id !== +id;
  });
  myStorage.setItem("locations", JSON.stringify(locations));
  return locations;
}
