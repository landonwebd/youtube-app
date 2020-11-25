import axios from "axios";

const KEY = "AIzaSyB-eAajd8X48A6JIEdknshT3DYr819n87w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
