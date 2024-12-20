import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { Response } from "../services/api_client";
import { GameQuery } from "../store";
import ms from "ms";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

//replace useQuery with useInfiniteQuery
//pass the pageParam
//pass pageParam to getAll method
//getNextPageParam

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<Response<Game>, Error>({
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
    staleTime: ms("1h"),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};

export default useGames;
