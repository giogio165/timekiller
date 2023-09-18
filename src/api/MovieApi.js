import axios from "axios";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "fcdcf37d8779f435786606a2ddd02898",
          language: "en-US",
          page: 1,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
  }
};
