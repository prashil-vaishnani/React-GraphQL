import React from "react";
import "./Character.css";
import useCharacter from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();

  const { error, loading, data } = useCharacter(id);
  if (error) {
    return <div>error...!</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(error, loading, data);

  return (
    <div className="Character">
      <img src={data.character.image} alt="sdbh" width="650px" height="400px" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div key={Math.random()}>
                {episode.name}-<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
