import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4MGY5NTM0MDFkYjYwZTU1M2U0MTI4NGY1ZjQwNyIsInN1YiI6IjYzNjBmZGI4NDBkMGZlMDA4MjY3ZjUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfm55H9d6vX72r5ZgVUk2HlkmK15hVNdfCiP7NkgWnQ",
  },
};

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

export const fetchTvDetail = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?language=ko-KR`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const fetchTvPeople = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=ko-KR`,
      options
    );
    const data = await response.json();
    console.log("티비사람데이터", data);
    return data;
  } catch (error) {
    console.error("API Error", error);
    return null;
  }
};

export const fetchTvRealatives = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/recommendations?language=ko-KR&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
