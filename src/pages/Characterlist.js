import React from "react";
import "./Characterlist.css";
import useCharacters from "../hooks/useCharacters";
import { Link } from "react-router-dom";

function Characterlist() {
  const { error, loading, data } = useCharacters();
  if (error) {
    return <div>error...!</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(data);
  return (
    <div className="Characterlist">
      {data.characters.results.map((character) => {
        return (
          <Link to={`${character.id}`}>
            <img
              src={character.image}
              alt="imagedsbf"
              width="200px"
              height="200px"
            />
            <h4>{character.name}</h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Characterlist;
