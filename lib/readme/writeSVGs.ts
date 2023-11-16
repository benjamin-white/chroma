import logger from "../logger";
import getSVGContent from "./getSVGContent";
import { writeFile } from "fs/promises";

const COLOR_BLOCK_HEIGHT = 48;

const writeSVGs = (colorEntries: [string, Record<string, string>][]) => {
  colorEntries.forEach(async ([name, values]) => {
    const palette = Object.entries(values);
    await writeFile(
      `assets/${name}.svg`,
      getSVGContent(
        palette,
        palette.length * COLOR_BLOCK_HEIGHT,
        COLOR_BLOCK_HEIGHT
      )
    );
    logger.success(`Wrote asset: ${name}.svg`);
  });
};

export default writeSVGs;
