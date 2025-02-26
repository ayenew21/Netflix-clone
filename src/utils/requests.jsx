const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  originals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  top_rated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  Action: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  Adventure: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  Animation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  // Documentary: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  TV: `https:/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  Drama: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
};

export default requests;
