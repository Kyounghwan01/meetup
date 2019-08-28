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
            name: "Code + Network"
          }
        ]
      }
    }
  };

  const component = shallow(<Favorites location={actions.location} />);

  it("should have element", () => {
    expect(component.exists("span")).toEqual(true);
    expect(component.exists("div")).toEqual(true);
    expect(component.exists("img")).toEqual(true);
    expect(component.exists("a")).toEqual(true);
  });

  it("should return title", () => {
    const wapperTitle = component
      .find(".favorites-title")
      .map(node => node.text());
    expect(wapperTitle).toEqual(["Monthly Meetup", "Code + Network"]);
  });
});
