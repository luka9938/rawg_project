import { Game } from "../entities/Game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card width="300px">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.background_image}
      />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((pp) => pp.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <HStack>
            <Link to={`/games/${game.slug}`}>{game.name}</Link>
            <Emoji rating_top={game.rating_top} />
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
