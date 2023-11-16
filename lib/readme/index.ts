import { existsSync, mkdirSync } from "fs";
import path from "path";
import dropAllFilesinDirectory from "../dropAllFilesInDirectory";
import Chroma from "../../src/index";
import writeSVGs from "./writeSVGs";
import writeREADME from "./writeREADME";

const OUT_FOLDER = "assets";
const colorEntries = Object.entries(Chroma.swatches);

if (!existsSync(OUT_FOLDER)) mkdirSync(OUT_FOLDER);

await dropAllFilesinDirectory(path.join(process.cwd(), OUT_FOLDER));
writeREADME(colorEntries);
writeSVGs(colorEntries);
