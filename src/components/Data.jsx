import React, { useCallback, useContext, useEffect, useState } from "react";
import style from "./Data.module.css";
import { Link } from "react-router-dom";
import { Context } from "./Context";
const Data = (props) => {
  console.log(props);
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const { handleadd } = useContext(Context);

  let url = "https://api.tvmaze.com/search/shows?q=all";
  const fetchData = useCallback(async () => {
    setloading(true);
    seterror(false);
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      let data = await response.json();

      const dataList = data;
      console.log(dataList);
      setloading(false);
      seterror(false);
      setMovies(dataList);
    } catch (Error) {
      seterror(true);
      setloading(false);
    }
    setloading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className={style.itemList}>
        {loading && <div>...loading</div>}
        {error && <div>...error</div>}
        {movies.map((ele, index) => {
          return (
            <div key={index} className={style.main}>
              {ele.show.image === null ? (
                <p>Image Not Found</p>
              ) : (
                <img src={ele.show.image.medium} alt="error" />
              )}
              <p className={style.name}>{ele.show.name}</p>
              <p className={style.lan}>{ele.show.language} Full Movie</p>

              <div>
                <Link to="/second">
                  <button
                    className={style.button}
                    onClick={() => handleadd(ele)}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Data;
