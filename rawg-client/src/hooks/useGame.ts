import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api_client";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGame = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: () => apiClient.getAll(), // Fetches all games
  });
};

export default useGame;
