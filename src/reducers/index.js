import { combineReducers } from "redux";
import * as type from "../constants/ActionTypes";

export const initalState = {
  meetupData: [],
  hostData: []
};

export const meetUpReducer = (state = initalState.meetupData, action) => {
  switch (action.type) {
    case type.INITAL_MEETUP_DATA:
      return action.meetUpDataProps.data.events;
    default:
      return state;
  }
};

export const hostReducer = (state = initalState.hostData, action) => {
  switch (action.type) {
    case type.GET_HOST_DATA:
      return state.concat(action.hostDataProps.data[0]);
    default:
      return state;
  }
};

const reducers = combineReducers({
  meetupData: meetUpReducer,
  hostData: hostReducer
});

export default reducers;
