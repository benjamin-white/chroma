import { describe, test, expect } from "vitest";
import getSVGContent from "./getSVGContent";

describe("getSVGContent", () => {
  test("it renders a single colour", () => {
    const result = getSVGContent([["vanillaSunset", "pink"]], 48, 48);

    expect(result).toMatchInlineSnapshot(`
      "<svg
        xmlns=\\"http://www.w3.org/2000/svg\\"
        width='100%'
        height=\\"48px\\"
        style=\\"font:inherit\\">
        <style>text {font: 400 14px sans-serif}</style>
        <rect x='0' y=\\"0\\" width=\\"100%\\" height=\\"48\\" fill=\\"pink\\"></rect>
        <text
          x=\\"16\\"
          y=\\"24\\"
          dominant-baseline=\\"middle\\"
        >Vanilla Sunset: pink</text>
      </svg>
      "
    `);
  });

  test("it renders a multiple colours", () => {
    const result = getSVGContent(
      [
        ["vanillaSunset", "pink"],
        ["springSea", "blue"],
      ],
      96,
      48
    );

    expect(result).toMatchInlineSnapshot(`
      "<svg
        xmlns=\\"http://www.w3.org/2000/svg\\"
        width='100%'
        height=\\"96px\\"
        style=\\"font:inherit\\">
        <style>text {font: 400 14px sans-serif}</style>
        <rect x='0' y=\\"0\\" width=\\"100%\\" height=\\"48\\" fill=\\"pink\\"></rect>
        <text
          x=\\"16\\"
          y=\\"24\\"
          dominant-baseline=\\"middle\\"
        >Vanilla Sunset: pink</text>
          <rect x='0' y=\\"48\\" width=\\"100%\\" height=\\"48\\" fill=\\"blue\\"></rect>
        <text
          x=\\"16\\"
          y=\\"72\\"
          dominant-baseline=\\"middle\\"
        >Spring Sea: blue</text>
      </svg>
      "
    `);
  });
});
