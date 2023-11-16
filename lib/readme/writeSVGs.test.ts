import { beforeEach, describe, expect, test, vi, type Mock } from "vitest";
import fs from "fs/promises";
import writeSVGs from "./writeSVGs";
import chalk from "chalk";

vi.mock("fs/promises");
const writeFileMock = fs.writeFile;
const logSpy = vi.spyOn(console, "log").mockImplementation(() => null);

beforeEach(() => (writeFileMock as Mock).mockReset());

describe("Write SVGs", () => {
  test("writes no files on empty palettes", () => {
    writeSVGs([]);
    expect(writeFileMock).not.toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalled();
  });

  test("writes a single colour", async () => {
    const paletteName = "paletteName";
    const palettesTest: [string, Record<string, string>][] = [
      [paletteName, { colorName: "rgb(0, 0, 0)" }],
    ];
    // prettier-ignore
    const expectedSVGContent =
`<svg
  xmlns=\"http://www.w3.org/2000/svg\"
  width='100%'
  height=\"48px\"
  style=\"font:inherit\">
  <style>text {font: 400 14px sans-serif}</style>
  <rect x='0' y=\"0\" width=\"100%\" height=\"48\" fill=\"rgb(0, 0, 0)\"></rect>
  <text
    x=\"16\"
    y=\"24\"
    dominant-baseline=\"middle\"
  >Color Name: rgb(0, 0, 0)</text>
</svg>
`;

    writeSVGs(palettesTest);

    expect(writeFileMock).toHaveBeenCalledWith(
      `assets/${paletteName}.svg`,
      expectedSVGContent
    );

    await vi.waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith(
        chalk.green.bold(`Wrote asset: ${paletteName}.svg`)
      );
    }, 200);
  });

  test("writes multiple palettes", async () => {
    const palettesTest: [string, Record<string, string>][] = [
      ["paletteName", { colorName: "rgb(0, 0, 0)" }],
      ["paletteName", { colorName: "rgb(0, 0, 0)" }],
    ];

    writeSVGs(palettesTest);
    expect(writeFileMock).toHaveBeenCalledTimes(2);
  });
});
