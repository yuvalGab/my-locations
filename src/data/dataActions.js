const myStorage = window.localStorage;

export function getData(dataType) {
  let data = myStorage.getItem(dataType);
  if (data) {
    data = JSON.parse(data);
  } else {
    data = [];
  }
  return data;
}

export function getNewId(data) {
  if (!data) {
    return 0;
  }
  let ids = [];
  data.forEach(n => {
    ids.push(n.id);
  });
  if (ids.length) {
    return Math.max.apply(null, ids) + 1;
  } else {
    return 0;
  }
}
