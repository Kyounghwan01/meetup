import * as type from "../constants/ActionTypes";

export const initalizeMap = () => ({
  type: type.INITALIZEMAP
});

export const initalMeetupData = meetUpDataProps => ({
  type: type.INITAL_MEETUP_DATA,
  meetUpDataProps
});

export const getHostData = hostDataProps => ({
  type: type.GET_HOST_DATA,
  hostDataProps
});
