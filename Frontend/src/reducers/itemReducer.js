// locationReducer.js
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  FETCH_ITEMS,
  REORDER_ITEMS
} from "../actions/itemActions.js";

const initialState = {
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item._id !== action.payload
        ),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case REORDER_ITEMS:
      const { startIndex, endIndex } = action.payload;
      const reorderedItems = Array.from(state.items);
      const [removed] = reorderedItems.splice(startIndex, 1);
      reorderedItems.splice(endIndex, 0, removed);
      return {
        ...state,
        items: reorderedItems,
      };
    default:
      return state;
  }
};

export default itemReducer;
