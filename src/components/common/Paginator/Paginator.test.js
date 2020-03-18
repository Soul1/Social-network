import React from "react";
import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component", () => {
  test("pages count is 11 but should only 10", () => {
    const component = create(<Paginator
      totalItemsCount={11}
      pageSize={1}
      portionSize={10}
    />);
    const root = component.root;
    let span = root.findAllByType("span");
    expect(span.length).toBe(10);
  });
  test("if pages count is more then 10 button NEXT should bee preset", () => {
    const component = create(<Paginator
      totalItemsCount={11}
      pageSize={1}
      portionSize={10}
    />);
    const root = component.root;
    let button = root.findAllByType("button");
    expect(button.length).toBe(1);
  });
});
