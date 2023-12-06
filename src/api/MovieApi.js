import axios from "axios";

const API_KEY = "fcdcf37d8779f435786606a2ddd02898";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODQ4MGY5NTM0MDFkYjYwZTU1M2U0MTI4NGY1ZjQwNyIsInN1YiI6IjYzNjBmZGI4NDBkMGZlMDA4MjY3ZjUwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tfm55H9d6vX72r5ZgVUk2HlkmK15hVNdfCiP7NkgWnQ",
  },
};

export const fetchMoviesWithImages = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: API_KEY,
          language: "ko-KR",
          page: 1,
        },
      }
    );

    const moviesWithImages = await Promise.all(
      response.data.results.map(async (movie) => {
        const imageResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=fcdcf37d8779f435786606a2ddd02898`
        );
        const imageData = await imageResponse.json();
        const image = imageData.backdrops[0]?.file_path || "";
        return { ...movie, image };
      })
    );

    return moviesWithImages;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchMovies = async () => {
  try {
    const moviesWithImages = await fetchMoviesWithImages();
    return moviesWithImages.map((movie) => {
      const { image, ...movieData } = movie;
      return movieData;
    });
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchGenreNames = async (genreIds) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list`,
      {
        params: {
          api_key: API_KEY,
          language: "ko-KR",
        },
      }
    );

    const matchingGenres = response.data.genres.filter((genre) =>
      genreIds.includes(genre.id)
    );

    const limitedGenres = matchingGenres.slice(0, 2);

    const genreNames = limitedGenres.map((genre) => genre.name);
    return genreNames;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchSearch = async (word) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/search/multi",
      {
        params: {
          api_key: API_KEY,
          language: "ko-KR",
          query: word,
          include_adult: false,
          page: 1,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const fetchComment = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const fetchRelatives = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=ko-KR&page=1`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const fetchPeople = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=ko-KR`,
      options
    );
    const data = await response.json();
    console.log("사람데이터", data);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
