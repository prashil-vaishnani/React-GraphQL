import { useQuery, gql } from "@apollo/client";

const Get_Character = gql`
  query data($id: ID!) {
    character(id: $id) {
      id
      name
      episode {
        name
        episode
      }
      gender
      image
    }
  }
`;

function useCharacter(id) {
  const { error, loading, data } = useQuery(Get_Character, {
    variables: { id },
  });
  return {
    error,
    loading,
    data,
  };
}

export default useCharacter;
