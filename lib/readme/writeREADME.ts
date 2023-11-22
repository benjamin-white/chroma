import { writeFile } from "fs/promises";
import logger from "../logger";
import rgbToNormal from "../rgbToNormal";

import { startCase } from "lodash";

const writeREADME = async (
  colorEntries: [string, Record<string, string>][]
) => {
  let output = `# **_Chroma_**\n\n`;
  output += `To use:\n`;
  output += "```sh\n";
  output += "npm i @arklo/chroma\n";
  output += "```\n\n";
  output += "```js\n";
  output += 'import Chroma from "@arklo/chroma"\n';
  output += "```\n\n";

  colorEntries.forEach(([name, values], index) => {
    output += `### **${startCase(name)}**\n`;
    output += Object.entries(values).reduce(
      (acc, [color, value]) =>
        `${acc}\n<!-- ${color}: ${value} | ${rgbToNormal(value)} -->`,
      ""
    );
    output += `\n<img src="assets/${name}.svg" width="100%">\n`;
    output += index + 1 !== colorEntries.length ? "\n" : "";
  });

  await writeFile("README.md", output);
  logger.success("<< README WRITTEN >>");
};

export default writeREADME;
