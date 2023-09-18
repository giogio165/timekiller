import React, { useEffect, useState } from "react";
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
