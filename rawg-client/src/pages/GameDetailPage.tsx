import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gamesResponse, isLoading, error } = useGame();

  if (isLoading) return <Spinner />;
  if (error) throw error;

  // Check if the data exists and filter by slug
  const game = gamesResponse?.results.find((g) => g.slug === slug);

  if (!game) {
    return <div>Game not found</div>; // Handle the case where the game is not found
  }

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={5}
    >
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem></GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
