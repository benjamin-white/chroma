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

describe("Write README file", () => {
  const successMessage = chalk.green.bold("<< README WRITTEN >>");
  test("writes README.md file", async () => {
    await writeREADME([]);

    expect(writeFileMock).toHaveBeenCalledWith(
      "README.md",
      `# **_Chroma_**\n\n`
    );

    expect(logSpy).toHaveBeenCalledWith(successMessage);
  });

  test("writes palette content into README.md", async () => {
    const paletteTest: [string, Record<string, string>][] = [
      ["paletteName", { colorName: "rgb(0, 0, 0)" }],
    ];

    await writeREADME(paletteTest);

    expect(writeFileMock).toHaveBeenCalledWith(
      "README.md",
      `# **_Chroma_**\n\n### **Palette Name**\n\n<!-- colorName: rgb(0, 0, 0) | [0, 0, 0] -->\n<img src=\"assets/paletteName.svg\" width=\"100%\">\n`
    );

    expect(logSpy).toHaveBeenCalledWith(successMessage);
  });
});
