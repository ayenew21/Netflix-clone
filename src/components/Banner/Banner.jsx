import { useEffect, useState } from "react";
import "./banner.css"; // Import the regular CSS file
import axiti from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function dataSebsbie() {
      try {
        const response = await axiti.get(requests.originals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    }
    dataSebsbie();
  }, []);
  const truncate = (Tstring, max_num) => {
    return Tstring?.length > max_num
      ? Tstring.substr(0, max_num - 1) + "..."
      : Tstring;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className="inner_banner">
        <h1>{movie?.original_name || movie?.name}</h1>
        <div className="banner_button">
          <button className="btn play">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="banner_desc">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
