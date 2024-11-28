import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api_client";
import { Platform } from "./usePlatforms";
import { GameQuery } from "../store";
import ms from "ms";

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Games>("/games");

//replace useQuery with useInfiniteQuery
//pass the pageParam
//pass pageParam to getAll method
//getNextPageParam

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Response<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          stores: gameQuery.storeId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms("1h"), // 1 hour
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};

export default useGames;
