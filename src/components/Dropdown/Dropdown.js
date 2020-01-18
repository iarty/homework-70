import React, { useContext } from "react";
import "./Dropdown.css";
import { TvaMazeContext } from "../../Context/TvMazeSearch";

const Dropdown = () => {
  const { searchResult, getTvShow, toggler } = useContext(TvaMazeContext);

  return (
    <div
      className="Dropdown mt-1"
      style={
        toggler && searchResult.length
          ? { display: "block", position: "absolute" }
          : { display: "none" }
      }
    >
      {searchResult.map((show, index) => (
        <div key={index}>
          <p
            className="hoverable"
            style={{ color: "#000", cursor: "pointer" }}
            onClick={() => getTvShow(show.id)}
          >
            {show.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
