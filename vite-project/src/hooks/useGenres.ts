import { useEffect, useState } from "react";
import apiClient from "../services/api_client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    apiClient
      .get<GenreResponse>("/genres")
      .then((response) => setGenres(response.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsFetching(false));
  }, []);
  return { genres, error, isFetching };
};
export default useGenres;
