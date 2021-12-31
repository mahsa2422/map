import { ActionType } from "./action.type";

const intialState = {
    dataExcel: [],
  };
  const excelReducer=(state=intialState,action)=>{
    switch (action.type) {
        case ActionType.FETCH_DATA_EXCEL:
            return{...state,state:action.payload}
        default:
            return state;
    }
  }
  export default excelReducer;