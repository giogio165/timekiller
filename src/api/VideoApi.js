import axios from "axios";

export const fetchVideosForMovie = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      {
        params: {
          api_key: "fcdcf37d8779f435786606a2ddd02898",
          language: "en-US",
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
  }
};

export const openYouTubeVideo = async (id) => {
  try {
    const apiKey = "fcdcf37d8779f435786606a2ddd02898";
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );

    const data = await response.json();

    if (data.results.length > 0) {
      const youtubeVideoKey = data.results[0].key;
      const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoKey}`;

      window.open(youtubeVideoUrl, "_blank");
    } else {
      console.error("No videos found for the movie");
    }
  } catch (error) {
    console.error("Error fetching movie videos", error);
  }
};
export const openTvYouTubeVideo = async (id) => {
  try {
    const apiKey = "fcdcf37d8779f435786606a2ddd02898";
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}`
    );

    const data = await response.json();

    if (data.results.length > 0) {
      const youtubeVideoKey = data.results[0].key;
      const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoKey}`;

      window.open(youtubeVideoUrl, "_blank");
    } else {
      console.error("No videos found for the movie");
    }
  } catch (error) {
    console.error("Error fetching movie videos", error);
  }
};
