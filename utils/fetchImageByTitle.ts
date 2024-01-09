// utils/unsplash.js
import axios from "axios";
// @ts-ignore
import translate from "google-translate-api";

const ACCESS_KEY = "ekb742Vs1Bfssk57L6EzFFU0fwXHX4uUZlPcSF5Ko2c";

const translateTitle = async (title: string) => {
  try {
    const result = await translate(title, { to: "en" }); // Translate to English for Unsplash
    return result.text;
  } catch (error) {
    console.error("Error translating title:", error);
    return title; // Return the original title in case of an error
  }
};

const fetchImageByTitle = async (title: string) => {
  try {
    const translatedTitle = await translateTitle(title);

    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        query: translatedTitle,
        client_id: ACCESS_KEY,
      },
    });

    const imageUrl = response.data.urls.regular;
    return imageUrl;
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return "";
  }
};

export default fetchImageByTitle;
