import path from "path";
import { readdir, stat, unlink } from "fs/promises";
import logger from "./logger";

const dropAllFilesinDirectory = async (relativePath: string) => {
  try {
    const files = await readdir(relativePath);

    await Promise.all(
      files.map(async (file) => {
        try {
          const filePath = path.join(relativePath, file);
          const statResult = await stat(filePath);
          if (statResult.isDirectory()) {
            logger.warn("Path is a directory, skipping...");
          } else {
            logger.success(`Removing: ${file}`);
            await unlink(filePath);
          }
        } catch (error) {
          logger.error(error.message);
        }
      })
    );
  } catch (error) {
    console.error(error.message);
  }
  logger.success(`<< ALL FILES REMOVED >>`);
};

export default dropAllFilesinDirectory;
