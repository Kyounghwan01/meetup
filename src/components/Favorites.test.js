import React from "react";
import { shallow, configure } from "enzyme";
import Favorites from "./Favorites";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Favorites/>", () => {
  const actions = {
    location: {
      state: {
        lists: [
          {
            created: 1546950493000,
            id: 1,
            date_in_series_pattern: false,
            name: "Monthly Meetup"
          },
          {
            created: 1562906156000,
            id: 2,
            duration: 7200000,
            id: "bcwvdryzlbpc",
            name: "Code + Network"
          }
        ]
      }
    }
  };

  it("should have element", () => {
    const component = shallow(
      <Favorites
        location={actions.location}
        chats={actions.chats}
        newMessenger={actions.newMessenger}
      />
    );

    expect(component.exists("span")).toEqual(true);
    expect(component.exists("div")).toEqual(true);
    expect(component.exists("img")).toEqual(true);

    const wapperTitle = component
      .find(".favorites-title")
      .map(node => node.text());
    expect(wapperTitle).toEqual(["Monthly Meetup", "Code + Network"]);
  });
});
