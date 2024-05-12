// ITEMActions.js
import axios from "axios";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const FETCH_ITEMS = "FETCH_ITEMS";
export const REORDER_ITEMS = "REORDER_ITEMS";

export const addItem = (newItem) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/items",
        newItem
      );
      dispatch({
        type: ADD_ITEM,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error adding ITEM:", error);
    }
  };
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/items/${id}`);
      dispatch({ type: DELETE_ITEM, payload: id });
      dispatch(fetchItems());
    } catch (error) {
      console.error("Error deleting ITEM:", error);
    }
  };
};

export const updateItem = (id, updatedItem) => {
  return async (dispatch) => {
    try {
      //console.log(id, updatedITEM);
      const response = await axios.post(
        `http://localhost:5000/items/${id}`,
        updatedItem
      );
      dispatch({
        type: UPDATE_ITEM,
        payload: response.data,
      });
      dispatch(fetchItems());
    } catch (error) {
      console.error("Error updating ITEM:", error);
    }
  };
};

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/items");
      dispatch({
        type: FETCH_ITEMS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching ITEMs:", error);
    }
  };
};

export const reorderItems = (startIndex, endIndex) => ({
  type: REORDER_ITEMS,
  payload: {
    startIndex,
    endIndex,
  },
});
