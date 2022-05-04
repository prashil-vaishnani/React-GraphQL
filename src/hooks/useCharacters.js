import { useQuery, gql } from "@apollo/client";

const Get_Data = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

function useCharacters() {
  const { error, loading, data } = useQuery(Get_Data);

  return {
    error,
    loading,
    data,
  };
}

export default useCharacters;
