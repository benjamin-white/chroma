import { describe, test, expect, vi, beforeEach, type Mock } from "vitest";
import fs from "fs/promises";
import chalk from "chalk";
import writeREADME from "./writeREADME";

vi.mock("fs/promises");
const writeFileMock = fs.writeFile;
const logSpy = vi.spyOn(console, "log").mockImplementation(() => null);

beforeEach(() => {
  (writeFileMock as Mock).mockReset();
});

let head = `# **_Chroma_**\n\n`;
head += `To use:\n`;
head += "```sh\n";
head += "npm i @arklo/chroma\n";
head += "```\n\n";
head += "```js\n";
head += 'import Chroma from "@arklo/chroma"\n';
head += "```\n\n";

describe("Write README file", () => {
  const successMessage = chalk.green.bold("<< README WRITTEN >>");
  test("writes README.md file", async () => {
    await writeREADME([]);

    expect(writeFileMock).toHaveBeenCalledWith("README.md", head);

    expect(logSpy).toHaveBeenCalledWith(successMessage);
  });

  test("writes palette content into README.md", async () => {
    const paletteTest: [string, Record<string, string>][] = [
      ["paletteName", { colorName: "rgb(0, 0, 0)" }],
    ];

    await writeREADME(paletteTest);

    expect(writeFileMock).toHaveBeenCalledWith(
      "README.md",
      `${head}### **Palette Name**\n\n<!-- colorName: rgb(0, 0, 0) | [0, 0, 0] -->\n<img src=\"assets/paletteName.svg\" width=\"100%\">\n`
    );

    expect(logSpy).toHaveBeenCalledWith(successMessage);
  });
});
