import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const get_data = gql`
  query Location($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    get_data,
    {
      variables: { name },
    }
  );
  if (error) {
    return <div>error !!!</div>;
  }
  if (loading) {
    return <div>loading....</div>;
  }
  console.log(called, data);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => getLocations()}>search</button>
      {loading && <div>loading...</div>}
      {error && <div>error...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
