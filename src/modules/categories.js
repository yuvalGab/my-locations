import {
  saveNewCategory,
  getCategoriesData,
  editExistCategory,
  removeCategory
} from "../data/categories";

export const ADD_CATEGORY = "categories/ADD_CATEGORY";
export const GET_CATEGORIES = "categories/GET_CATEGORIES";
export const SELECT_CATEGORY = "categories/SELECT_CATEGORY";
export const EDIT_CATEGORY = "categories/EDIT_CATEGORY";
export const DELETE_CATEGORY = "categories/DELETE_CATEGORY";

const initialState = {
  categoriesList: getCategoriesData() || [],
  selectedCategoryId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categoriesList: action.data
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categoriesList: action.data
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategoryId: action.data
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        categoriesList: action.data
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categoriesList: action.data
      };

    default:
      return state;
  }
};

export const addCategory = data => {
  const categories = saveNewCategory(data);
  return dispatch => {
    dispatch({
      type: ADD_CATEGORY,
      data: categories
    });
  };
};

export const getCategories = () => {
  const categories = getCategoriesData();
  return dispatch => {
    dispatch({
      type: ADD_CATEGORY,
      data: categories
    });
  };
};

export const selectCategory = id => {
  return dispatch => {
    dispatch({
      type: SELECT_CATEGORY,
      data: id
    });
  };
};

export const editCategory = (id, data) => {
  const categories = editExistCategory(id, data);
  return dispatch => {
    dispatch({
      type: EDIT_CATEGORY,
      data: categories
    });
  };
};

export const deleteCategory = id => {
  const categories = removeCategory(id);
  return dispatch => {
    dispatch({
      type: DELETE_CATEGORY,
      data: categories
    });
  };
};
