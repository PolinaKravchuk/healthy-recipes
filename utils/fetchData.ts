// utils/fetchData.js
import fs from "fs/promises";
import path from "path";

export const fetchData = async (encodedFileName: string, folder: string) => {
  try {
    const decodedFileName = decodeURIComponent(encodedFileName);
    const filePath = path.join(
      process.cwd(),
      "public",
      folder,
      decodedFileName
    );
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
