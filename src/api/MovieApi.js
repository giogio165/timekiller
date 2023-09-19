import axios from "axios";

export const fetchMoviesWithImages = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: "fcdcf37d8779f435786606a2ddd02898",
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
      // Return only the movie data without images
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
          api_key: "fcdcf37d8779f435786606a2ddd02898",
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
