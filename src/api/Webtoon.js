import axios from "axios";

export const fetchWebtoons = async () => {
  try {
    const response = await axios.get(
      "https://korea-webtoon-api.herokuapp.com/?perPage=10&page=1&service=kakao&updateDay=sun"
    );
    return response.data.webtoons;
  } catch (error) {
    console.error("API Error:", error);
  }
};
