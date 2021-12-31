import { ActionType } from "./action.type";


export const FetchAction=(data)=>{
    return {
        type:ActionType.FETCH_DATA_EXCEL,
        payload: data,
      };
}