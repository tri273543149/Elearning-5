import { FILTER } from "../constants/filter";

let initialState = {
    filterType: "",
    filterValue: -1,
  };
  
  let filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER:
        state = {
          filterType: action.filterType,
          filterValue: action.filterValue,
        };
        return { ...state };
      default:
        return { ...state };
    }
  };
  
  export default filterReducer;