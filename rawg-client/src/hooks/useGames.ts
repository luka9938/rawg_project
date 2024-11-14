import { useQuery } from "@tanstack/react-query";
import { Response } from "../services/api_client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../App";
import ApiClient from "../services/api_client";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Games>("/games");

const useGames = (gameQuery: GameQuery) => {
  const queryFunction = () =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        stores: gameQuery.store?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    });

  return useQuery<Response<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: queryFunction,
  });
};

export default useGames;
