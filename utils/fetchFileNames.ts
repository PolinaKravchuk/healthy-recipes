// utils/fetchFileNames.js
import fs from "fs/promises";
import path from "path";

export const fetchFileNames = async (folderPath: string) => {
  try {
    const directoryPath = path.join(process.cwd(), "public", folderPath);
    const files = await fs.readdir(directoryPath);
    return files;
  } catch (error) {
    console.error("Error fetching file names:", error);
    return [];
  }
};
