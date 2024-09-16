import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <PlatformIconsList
          platforms={game.parent_platforms.map((pp) => pp.platform)}
        />
        <CriticScore score={game.metacritic} />
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
