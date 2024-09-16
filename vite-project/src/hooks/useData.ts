import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
interface Response<T> {
  count: number;
  results: T[];
}
function useData<T>(endpoint: string) {
  const [data, setGames] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    apiClient
      .get<Response<T>>(endpoint)
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsFetching(false));
  }, []);
  return { data, error, isFetching };
}

export default useData;
