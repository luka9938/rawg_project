import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api_client";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => {
  const queryfunction = () =>
    apiClient.get<Genre[]>("/genres").then((response) => response.data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: queryfunction,
    retry: 3,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
};

export default useGenres;
