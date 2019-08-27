import { initalState, meetUpReducer, hostReducer } from "./index";

import { initalMeetupData, getHostData } from "../actions";

describe("reducer func test", () => {
  it("init state test", () => {
    expect(initalState).toHaveProperty("meetupData");
    expect(initalState.meetupData).toEqual([]);
    expect(initalState.hostData).toEqual([]);
    expect(meetUpReducer(undefined, {})).toEqual(initalState.meetupData);
    expect(hostReducer(undefined, {})).toEqual(initalState.hostData);
  });

  describe("action data test", () => {
    it("initalMeetupData action test", () => {
      expect(
        meetUpReducer(
          initalState.meetupData,
          initalMeetupData({
            data: {
              events: {
                created: 1546950493000,
                id: "257892803",
                local_date: "2019-09-18",
                local_time: "19:00",
                name: "Analytics at Speed Seoul - SAVE THE DATE",
                yes_rsvp_count: 16
              }
            }
          })
        )
      ).toEqual({
        created: 1546950493000,
        id: "257892803",
        local_date: "2019-09-18",
        local_time: "19:00",
        name: "Analytics at Speed Seoul - SAVE THE DATE",
        yes_rsvp_count: 16
      });
    });

    it("getHostData action test", () => {
      expect(
        hostReducer(
          initalState.hostData,
          getHostData({ data: [{ id: 235973807, name: "Kate Jory" }] })
        )
      ).toEqual([{ id: 235973807, name: "Kate Jory" }]);
    });
  });
});
