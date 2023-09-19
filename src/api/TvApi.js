import axios from "axios";

export const fetchTvShows = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular",
      {
        params: {
          api_key: "fcdcf37d8779f435786606a2ddd02898",
          language: "ko-KR",
          page: 2,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
  }
};
export const fetchGenreNames = async (genreCodes) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list`,
      {
        params: {
          api_key: "fcdcf37d8779f435786606a2ddd02898",
          language: "ko-KR",
        },
      }
    );

    const matchingGenres = response.data.genres.filter((genre) =>
      genreCodes.includes(genre.id)
    );

    const limitedGenres = matchingGenres.slice(0, 2);

    const genreNames = limitedGenres.map((genre) => genre.name);
    return genreNames;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
