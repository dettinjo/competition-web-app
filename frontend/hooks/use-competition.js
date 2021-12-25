
import { GET_ONE_COMPETITION } from "../GraphQl/competition";
import { gql, useQuery } from "@apollo/client";

export default function useCompetition(id) {
  let query = false;
  if (typeof id !== "undefined") {
    query = true;
  }

  if (query) {
    const { errorCompetition, loadingCompetition, dataCompetition } = useQuery(
      GET_ONE_COMPETITION,
      {
        variables: { id },
      }
    );
    return {
      data: dataCompetition,
      loading: loadingCompetition,
      error: errorCompetition,
    };
  } else {
    return {
      data: null,
      loading: null,
      error: null,
    };
  }
}
