import { getData, getNewId } from "./dataActions";

const myStorage = window.localStorage;

export function saveNewCategory(data) {
  let categories = getData("categories");
  const id = getNewId(categories);
  categories.push(Object.assign({ id }, data));
  myStorage.setItem("categories", JSON.stringify(categories));
  return categories;
}

export function getCategoriesData() {
  return getData("categories");
}

export function editExistCategory(id, data) {
  let categories = getData("categories");
  categories = categories.map(c => {
    if (c.id === +id) {
      return Object.assign({ id: +id }, data);
    } else {
      return c;
    }
  });
  myStorage.setItem("categories", JSON.stringify(categories));
  return categories;
}

export function removeCategory(id) {
  let categories = getData("categories");
  categories = categories.filter(l => {
    return l.id !== +id;
  });
  myStorage.setItem("categories", JSON.stringify(categories));
  return categories;
}
